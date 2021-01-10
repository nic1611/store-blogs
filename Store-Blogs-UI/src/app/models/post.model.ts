import { Blog } from "./blog.model";

export interface Post {
  postId: number;
  title: string;
  content: string;
  blogId: number;
  blog: Blog;
}
