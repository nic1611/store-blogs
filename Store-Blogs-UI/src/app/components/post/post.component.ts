import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      console.log(routeParams.id);
      this.postService.getPost(routeParams.id).subscribe(post => this.post = post);
    });
  }
}
