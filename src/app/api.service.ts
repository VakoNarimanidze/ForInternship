import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
getPostsByUser(userId?: number) {
  if (userId !== undefined) {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  } else {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
}
getTodos(){
  return this.http.get(`https://jsonplaceholder.typicode.com/todos`)
}
}