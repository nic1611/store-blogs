import { Blog } from "./blog.model";

export class Post {
  postId: number;
  title: string;
  content: string;
  blogId: number;
  blog: Blog;
}
