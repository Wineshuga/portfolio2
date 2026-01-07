import { collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import { db } from "../../firebase";

export interface PostType {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: Timestamp;
  published: boolean;
}

export const getPosts = async (): Promise<PostType[]> => {
  const q = query(collection(db, "posts"), where("published", "==", true));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    slug: doc.data().slug,
    excerpt: doc.data().excerpt,
    content: doc.data().content,
    createdAt: doc.data().createdAt,
    published: doc.data().published,
  }));
};
