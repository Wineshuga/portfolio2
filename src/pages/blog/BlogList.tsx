import { useEffect, useState } from "react";
import { getPosts } from "./getPost";
import { Link } from "react-router-dom";
import type { Timestamp } from "firebase/firestore";

const BlogList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  interface PostType {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    createdAt: Timestamp;
    published: boolean;
  }

  useEffect(() => {
    getPosts().then((data: PostType[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className="min-h-screen py-12 px-4 bg-gray-50"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-mono">Blog</h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <p className="text-sm text-gray-500">
                {post.createdAt.toDate().toLocaleDateString()}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
