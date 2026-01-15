import { useEffect, useState } from "react";
import { getPosts } from "./getPost";
import { Link } from "react-router-dom";
import type { PostType } from "../../../types";
import LoadingIcon from "../../../components/micro/LoadingIcon";

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
            posts.map((post) => (
              <article key={post.id} className="">
                <p className="text-sm text-gray-500">
                  {post.createdAt.toDate().toLocaleDateString()}
                </p>
                <h2 className="text-xl font-semibold mb-2 underline hover:no-underline">
                  <Link to={`/articles/${post.slug}`} className="text-[#e1d3b6] ">
                    {post.title}
                  </Link>
                </h2>
              </article>
            ))
          ) : (
            <p className="text-sm text-center py-20">I'm out of Ink 😁</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
