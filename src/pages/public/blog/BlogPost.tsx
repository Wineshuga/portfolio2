import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "./getSinglePost";
import { usePageTitle } from "../../../lib/usePageTitle";
import LoadingIcon from "../../../components/micro/LoadingIcon";
import type { BlogPostType } from "../../../types";
import { MarkdownComponents } from "../../../lib/MarkDownEdit";

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
        <p className="text-center mt-10 text-[#ddd]">
          I'll have to check what happened 😬.
        </p>
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
                  components={MarkdownComponents}
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
