import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Optional: Define the User interface here or in a separate model file
export interface User {
  id: number;
  name: string;
  role: 'system_admin' | 'editor' | 'viewer';
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Ensure this matches your Laravel URL
  private apiUrl = 'http://127.0.0.1:8000/api'; 

  constructor(private http: HttpClient) {}

  // Function to get users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
