import { useEffect, useState } from "react";
import { getPosts } from "../blog/getPost";
import { deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import type { PostType } from "../../types";
import LoadingIcon from "../../components/micro/LoadingIcon";
import PostCard from "../../components/micro/PostCard";

const Trash = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts("trash").then((data: PostType[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const handlePermanentDelete = async (postId: string) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      getPosts("trash").then((data: PostType[]) => {
        setPosts(data);
      });
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleMoveToArchive = async (postId: string) => {
    try {
      await updateDoc(doc(db, "posts", postId), {
        status: "draft",
        deleted: false,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error archiving/unarchiving post:", error);
    } finally {
      getPosts("trash").then((data: PostType[]) => {
        setPosts(data);
      });
    }
  };

  return (
    <div className="font-nunito">
      <h1 className="text-center text-2xl md:text-4xl font-semibold">
        Trashed Posts <span>({posts?.length})</span>
      </h1>

      <div className="max-w-4xl mx-auto">
        {loading ? (
          <section className="flex justify-center">
            <LoadingIcon />
          </section>
        ) : (
          <div className="space-y-6">
            {posts.length === 0 ? (
              <p className="text-center py-20">Nothing Here</p>
            ) : (
              posts.map((post, index) => (
                <PostCard
                  index={index}
                  post={post}
                  handleMoveToArchive={handleMoveToArchive}
                  handlePermanentDelete={handlePermanentDelete}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trash;
