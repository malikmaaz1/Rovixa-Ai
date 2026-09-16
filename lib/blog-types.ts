export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  status: "draft" | "published";
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
};

export type BlogInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  metaTitle: string;
  metaDescription: string;
  status: "draft" | "published";
};
