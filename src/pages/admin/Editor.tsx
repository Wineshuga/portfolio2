import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MarkdownComponents } from "../../lib/MarkDownEdit";
import type { PostType } from "../../types";
import LoadingIcon from "../../components/micro/LoadingIcon";

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

export default function Editor() {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("## Start writing...");
  const [excerpt, setExcerpt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const postStatus = location?.state?.postStatus;

  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      setLoading(true);
      const snap = await getDoc(doc(db, "posts", postId));
      if (snap.exists()) {
        setPost({ id: snap.id, ...snap.data() } as PostType);
      }
      setLoading(false);
    };

    fetchPost();
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent, status: string) => {
    e.preventDefault();
    const slug = slugify(title);
    const payload = {
      title,
      slug,
      content,
      excerpt,
      published: status === "published" ? true : false,
      status,
      deleted: false,
      publishedAt: status === "published" ? serverTimestamp() : null,
      updatedAt: null,
      createdAt: serverTimestamp(),
    };

    try {
      setIsLoading(true);
      await addDoc(collection(db, "posts"), payload);
      navigate(
        `/admin/${
          status === "published" ? "published-posts" : "archived-posts"
        }`
      );
    } catch (error) {
      console.error("Error publishing post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveChanges = async () => {
    if (!post || !postId) return;

    const slug = slugify(post.title);

    try {
      setIsLoading(true);
      await updateDoc(doc(db, "posts", postId), {
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        slug: slug,
        status: postStatus,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setPost(null);
      setIsLoading(false);
    }
  };

  if (loading)
    return (
      <section className="flex justify-center">
        <LoadingIcon />
      </section>
    );

  return (
    <section>
      <div
        className="min-h-screen flex items-start justify-center py-12 px-4 bg-gray-50"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="w-full max-w-11/12 space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-mono">
              Create Article
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  value={post?.title ?? title}
                  onChange={(e) =>
                    post
                      ? setPost(
                          (prev) => prev && { ...prev, title: e.target.value }
                        )
                      : setTitle(e.target.value)
                  }
                  placeholder="Article title"
                  className="w-full text-sm p-2 border border-[#ddd] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Excerpt
                </label>
                <input
                  type="text"
                  className="border border-[#ddd]  w-full text-sm p-2"
                  placeholder="Short summary for SEO (140–160 chars)"
                  max={160}
                  value={post?.excerpt ?? excerpt}
                  onChange={(e) =>
                    post
                      ? setPost(
                          (prev) => prev && { ...prev, excerpt: e.target.value }
                        )
                      : setExcerpt(e.target.value)
                  }
                />
              </div>

              <div>
                <textarea
                  value={post?.content ?? content}
                  onChange={(e) =>
                    post
                      ? setPost(
                          (prev) => prev && { ...prev, content: e.target.value }
                        )
                      : setContent(e.target.value)
                  }
                  className="p-4 h-[80vh] border border-[#ddd] w-full"
                />
                <p className="m-4">Preview:</p>
                <div className="p-4 h-[80vh] overflow-auto border border-[#ddd]">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={MarkdownComponents}
                  >
                    {post?.content ?? content}
                  </ReactMarkdown>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                {post ? (
                  <>
                    <button
                      type="submit"
                      disabled={isLoading}
                      onClick={saveChanges}
                      className="px-6 py-2 border border-[#e1d3b6] text-sm rounded-md"
                    >
                      {isLoading ? "Saving..." : "Save"}
                    </button>
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={() => setPost(null)}
                      className="px-6 py-2 border border-[#e1d3b6] text-sm rounded-md"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      disabled={isLoading}
                      onClick={(e) => handleSubmit(e, "published")}
                      className="px-6 py-2 border border-[#e1d3b6] text-sm rounded-md"
                    >
                      {isLoading ? "Publishing..." : "Publish Article"}
                    </button>
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={(e) => handleSubmit(e, "draft")}
                      className="px-6 py-2 border border-[#e1d3b6] text-sm rounded-md "
                    >
                      Save to Draft
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
