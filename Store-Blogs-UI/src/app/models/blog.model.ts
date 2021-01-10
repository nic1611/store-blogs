import { Post } from './post.model';

export interface Blog {
  blogId: number;
  url: string;
  posts: Post[];
}
