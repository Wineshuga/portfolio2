import { useEffect, useState } from "react";
import { getPosts } from "../blog/getPost";
import { useLocation } from "react-router-dom";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import LoadingIcon from "../../components/micro/LoadingIcon";
import PostCard from "../../components/micro/PostCard";
import type { PostStatus, PostType } from "../../types";

const PostPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const status = location.state?.status || "published";

  useEffect(() => {
    setLoading(true);
    getPosts(status).then((data: PostType[]) => {
      setPosts(data);
      setLoading(false);
    });
  }, [status]);

  const toggleArchive = async (postId: string, status: PostStatus) => {
    try {
      await updateDoc(doc(db, "posts", postId), {
        status: status === "published" ? "draft" : "published",
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error archiving/unarchiving post:", error);
    } finally {
      getPosts(status).then((data: PostType[]) => {
        setPosts(data);
      });
    }
  };

  const moveToTrash = async (postId: string) => {
    try {
      await updateDoc(doc(db, "posts", postId), {
        deleted: true,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error moving post to trash:", error);
    } finally {
      getPosts(status).then((data: PostType[]) => {
        setPosts(data);
      });
    }
  };

  return (
    <div className="font-nunito">
      <h1 className="text-center text-2xl md:text-4xl font-semibold">
        {status === "published"
          ? "Published Posts"
          : "Drafted / Archived Posts"}{" "}
        <span>({posts?.length})</span>
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
                  key={post.id}
                  index={index}
                  post={post}
                  moveToTrash={moveToTrash}
                  toggleArchive={toggleArchive}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPage;
