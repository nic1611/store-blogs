import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent implements OnInit {
  public formPost: FormGroup;

  public listaBlogs: Array<object> = [
    { nome: 'C#', id: 1 },
    { nome: 'R', id: 2 },
    { nome: 'Python', id: 3 },
  ];

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: Post,
    private postService: PostService
  ) {
    this.createForm(data);
  }

  ngOnInit(): void {}

  createForm(post: Post) {
    this.formPost = this.formBuilder.group({
      postId: [post.postId],
      title: [post.title],
      content: [post.content],
      blogId: [post.blogId],
    });
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formPost.value);

    if (this.formPost.value.postId == null) {
      this.formPost.value.postId = 0;
      this.postService.create(this.formPost.value).subscribe(() => {});
    } else {
      this.postService.update(this.formPost.value).subscribe(() =>{});
    }
  }
}
