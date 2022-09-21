import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.API_URL}/posts`);
  }

  addPost(post) {
    return this.http.post(`${this.API_URL}/posts`, post);
  }

  deletePost(id) {
    return this.http.delete(`${this.API_URL}/posts/${id}`);
  }
}
