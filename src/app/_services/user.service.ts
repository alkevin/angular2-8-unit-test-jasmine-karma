import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.API_URL}/users`);
  }
}
