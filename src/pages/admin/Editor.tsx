import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
              </div>

              <div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="p-4 h-[80vh] border border-[#ddd] w-full"
                />
                <p className="m-4">Preview:</p>
                <div className="p-4 h-[80vh] overflow-auto border border-[#ddd]">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-[#e1d3b6] my-4">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-semibold text-[#e1d3b6] my-3">
                          {children}
                        </h2>
                      ),
                      p: ({ children }) => <p className="mb-4">{children}</p>,
                      ul: ({ children }) => (
                        <ul className="list-disc ml-6 mb-4">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal ml-6 mb-4">{children}</ol>
                      ),
                      li: ({ children }) => (
                        <li className="mb-1">{children}</li>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </div>
              <div className="flex justify-end gap-3">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
