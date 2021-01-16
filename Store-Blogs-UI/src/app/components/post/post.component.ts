import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';
import { CreateEditComponent } from '../create-edit/create-edit.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      console.log(routeParams.id);
      this.postService.getPost(routeParams.id).subscribe(post => this.post = post);
    });
  }

  public openDialog(post: Post) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = post;

    this.dialog
      .open(CreateEditComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.postService.getPost(post.postId).subscribe(post => this.post = post);
      });
  }

  public deletar(post: Post) {
    this.postService.delete(post.postId).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
