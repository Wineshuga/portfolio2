import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import type { PostType } from "../../../types";

export const getPosts = async (status: string): Promise<PostType[]> => {
  const q = query(
    collection(db, "posts"), 
    where("deleted", "==", false),
    where("status", "==", status)
  );

  const qForTrash = query(
    collection(db, "posts"), 
    where("deleted", "==", true)
  );

  const qToUse = status === "trash" ? qForTrash : q;
  const snapshot = async () => {
    try {
      return await getDocs(qToUse)
    } catch (error) {
      console.error("Error fetching posts:", error);
      return null;
    }
  };

  return snapshot().then((snapshot) => {
    if (!snapshot) return [];
    
    return snapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    slug: doc.data().slug,
    excerpt: doc.data().excerpt,
    content: doc.data().content,
    createdAt: doc.data().createdAt,
    published: doc.data().published,
    status: doc.data().status,
    deleted: doc.data().deleted,
    publishedAt: doc.data().publishedAt,
    updatedAt: doc.data().updatedAt,    
  }))});
};
