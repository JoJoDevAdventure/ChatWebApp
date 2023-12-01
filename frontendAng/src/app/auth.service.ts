import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  private user: any; // Assuming user information

  isAuthenticated(): boolean {

    return true;
  }

  login(username: string, secret: string): Observable<any> {
    const body = { username, secret };

    return this.http.post<any>(`${this.apiUrl}/login`, body)
  }

  // register(username: string, password: string): Observable<any> {
  //   // return this.http.post<any>(`${this.apiUrl}/register`, { username, password });
  // }

}
