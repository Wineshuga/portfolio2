import type { Timestamp } from "firebase/firestore";

export type PostType = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: Timestamp;
  published: boolean;
  status: string;
  deleted: boolean;
  publishedAt: Timestamp;
  updatedAt: Timestamp;
}

export type PostStatus = "draft" | "published" | "archived";

export type BlogPostType = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  createdAt: Timestamp
}

