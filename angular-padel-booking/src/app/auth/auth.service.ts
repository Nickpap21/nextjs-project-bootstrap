import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  private tokenKey = 'padel_jwt_token';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      // Optionally decode token to get user info or validate token
      this.currentUserSubject.next({ token });
    }
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(\`\${environment.apiBaseUrl}/api/auth/login\`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem(this.tokenKey, response.token);
          this.currentUserSubject.next({ token: response.token });
        })
      );
  }

  register(
    email: string,
    password: string,
    name: string
  ): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(\`\${environment.apiBaseUrl}/api/auth/register\`, {
        email,
        password,
        name,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem(this.tokenKey, response.token);
          this.currentUserSubject.next({ token: response.token });
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
