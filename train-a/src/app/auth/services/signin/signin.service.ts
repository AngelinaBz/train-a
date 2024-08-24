import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private readonly apiUrl = '/api/signin';
  private isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  signin(email: string, password: string): Observable<{ token?: string; error?: string }> {
    const body = JSON.stringify({ email, password });

    return this.http.post<{ token?: string; error?: string }>(this.apiUrl, body).pipe(
      tap((response) => {
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
          this.isLoggedIn.next(true);
        }
      }),
      catchError((err) => {
        return of({ error: err.error.message });
      }),
    );
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
