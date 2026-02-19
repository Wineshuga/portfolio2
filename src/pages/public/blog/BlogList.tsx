import { useEffect, useState } from "react";
import { getPosts } from "./getPost";
import { Link } from "react-router-dom";
import type { PostType } from "../../../types";
import LoadingIcon from "../../../components/micro/LoadingIcon";
import ReadTime from "../../../components/ReadTime";

const BlogList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts("published").then((data: PostType[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  console.log("posts", posts);

  return (
    <section className="min-h-screen py-12 px-4 pt-30 bg-black font-poppins">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-[#ddd] font-mono">
          Articles
        </h1>
        <div className="space-y-6">
          {loading ? (
            <section className="flex justify-center">
              <LoadingIcon />
            </section>
          ) : posts.length > 0 ? (
            posts?.map((post) => (
              <Link
                to={`/articles/${post?.slug}`}
                key={post?.id}
                className="text-[#e1d3b6] "
              >
                <article className="hover:bg-gray-900 p-5 my-3 rounded-md">
                  <p className="text-sm text-gray-500">
                    {post?.publishedAt?.toDate().toDateString()}
                  </p>
                  <h2 className="text-xl font-semibold mb-2 underline hover:no-underline">
                    {post?.title}
                  </h2>
                  <ReadTime content={post?.content} />
                </article>
              </Link>
            ))
          ) : (
            <p className="text-sm text-center py-20 text-[#ddd] font-semibold">
              I'm out of Ink 😁
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
