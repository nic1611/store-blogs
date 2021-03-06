import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Blog } from '../models/blog.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.apiUrl}Post/Todos`);
  }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}Post/${id}`);
  }

  public create(post: Post): Observable<object> {
    return this.http.post<Post>(`${environment.apiUrl}Post/Novo`, post);
  }

  public update(post: Post): Observable<object> {
    return this.http.put<Post>(`${environment.apiUrl}Post/Editar`, post);
  }

  public delete(id: number): Observable<object> {
    return this.http.delete<Post>(`${environment.apiUrl}Post/Remover/${id}`);
  }
}
