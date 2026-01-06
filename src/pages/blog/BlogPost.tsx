import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "./getSinglePost";
import { usePageTitle } from "../../hooks/usePageTitle";

interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
}

const BlogPost = () => {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const slug = window.location.pathname.split("/").pop();
      if (slug) {
        const response = await getPostBySlug(slug);
        setPost(response);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  usePageTitle(post ? `${post.title} | Winnie` : "Blog", post?.excerpt);

  return (
    <div>
      {isLoading ? (
        <p
          className="text-center mt-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Loading...
        </p>
      ) : post === null ? (
        <p
          className="text-center mt-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Post not found.
        </p>
      ) : (
        <>
          {post && (
            <section key={post.id} className="p-4 max-w-3xl mx-auto">
              <div key={post.id} className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>

                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPost;
