import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostComponent } from '../post/post.component';

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

  constructor(private formBuilder: FormBuilder) {
    this.createForm(new Post());
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
  }
}
