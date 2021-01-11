import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditComponent } from '../create-edit/create-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: Array<Blog> = new Array<Blog>();
  posts: Array<Post> = new Array<Post>();

  constructor(private postService: PostService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((blogs) => {
      this.blogs = blogs;
      blogs.map((e) => e.posts.map((p) => this.posts.push(p)));
    });
  }

  public openDialog() {
    this.dialog.open(CreateEditComponent);
  }
}
