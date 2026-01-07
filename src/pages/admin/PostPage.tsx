import { useEffect, useState } from "react";
import { getPosts, type PostType } from "../blog/getPost";
import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const PostPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data: PostType[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (postId: string) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      getPosts().then((data: PostType[]) => {
        setPosts(data);
      });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Created Posts</h1>

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
              <div>
                <button type="button">Edit</button>
                <button type="button" onClick={() => handleDelete(post.id)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
