import {
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore"
import { db } from "../../../firebase"

export async function getPostBySlug(slug: string) {
  const q = query(
    collection(db, "posts"),
    where("slug", "==", slug),
    where("published", "==", true),
    limit(1)
  )

  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]

  return {
    id: doc.id,
    title: doc.data().title,
    slug: doc.data().slug,
    excerpt: doc.data().excerpt,
    content: doc.data().content,
    createdAt: doc.data().createdAt,
    publishedAt: doc.data().publishedAt,
    published: doc.data().published,
  }
}
