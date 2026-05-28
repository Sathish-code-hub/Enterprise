import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {}

  getUserRecords(userId: string, delayMs: number = 1500): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users/${userId}/records?delay=${delayMs}`);
  }

  getSystemUsers(delayMs: number = 1500): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/users?delay=${delayMs}`);
  }
}
