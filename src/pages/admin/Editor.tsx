import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

export default function MarkdownEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("## Start writing...");
  const [excerpt, setExcerpt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
        `/admin/dashboard/${
          status === "published" ? "published-posts" : "archived-posts"
        }`
      );
    } catch (error) {
      console.error("Error publishing post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <section>
      <button onClick={handleLogout}>Sign out</button>
      <button
        onClick={() =>
          navigate("/admin/dashboard/published-posts", {
            state: { status: "published" },
          })
        }
      >
        All posts
      </button>
      <button
        onClick={() =>
          navigate("/admin/dashboard/archived-posts", {
            state: { status: "draft" },
          })
        }
      >
        Archive
      </button>
      <button onClick={() => navigate("/admin/dashboard/trashed-posts")}>
        Trash
      </button>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Article title"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Excerpt
                </label>
                <input
                  type="text"
                  placeholder="Short summary for SEO (140–160 chars)"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ height: "80vh", padding: "1rem" }}
                />

                <div
                  style={{
                    padding: "1rem",
                    height: "80vh",
                    overflow: "auto",
                    border: "1px solid #ddd",
                  }}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                onClick={(e) => handleSubmit(e, "published")}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                {isLoading ? "Publishing..." : "Publish Article"}
              </button>
              <button
                type="button"
                disabled={isLoading}
                onClick={(e) => handleSubmit(e, "draft")}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Save to Draft
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
