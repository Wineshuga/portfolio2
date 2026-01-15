import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "./getSinglePost";
import { usePageTitle } from "../../../hooks/usePageTitle";
import LoadingIcon from "../../../components/micro/LoadingIcon";
import type { BlogPostType } from "../../../types";

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
    <section className="min-h-screen py-12 px-4 pt-30 bg-black font-poppins">
      {isLoading ? (
        <section className="flex justify-center">
          <LoadingIcon />
        </section>
      ) : post === null ? (
        <p className="text-center mt-10">I'll have to check what happen 😬.</p>
      ) : (
        <>
          {post && (
            <section key={post.id} className="sm:w-11/12 mx-auto">
              <article key={post.id} className="mb-8 text-[#ddd]">
                <h2 className="text-2xl capitalize md:text-4xl font-bold mb-10 text-[#e1d3b6] ">
                  {post.title}
                </h2>
                <p className="p-2">{post.createdAt.toDate().toDateString()}</p>
                <p className="border-y border-[#e1d3b6] px-5 py-10 mb-10">
                  {post.excerpt}
                </p>
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
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </article>
            </section>
          )}
        </>
      )}
    </section>
  );
};

export default BlogPost;
