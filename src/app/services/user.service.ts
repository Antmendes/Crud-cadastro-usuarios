import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/1ecab7ec-5b11-4048-9b43-ab6587aa82f5'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUser(id: any):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user)
  }

  deleteUser(id: number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  updateUser(id: any, user:User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user)
  }
}
