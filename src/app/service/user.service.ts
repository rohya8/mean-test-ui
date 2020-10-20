import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/user/';
  private user: User;

  // API for listing user
  getAllUsers() {
    return this.http.get(this.baseUrl);
  }

  // API for updating user
  updateUser(user: User) {
    return this.http.put(this.baseUrl, user);
  }

  // API for creating user
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  // API for deleting user
  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + id);
  }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }
}
