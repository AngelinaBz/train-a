import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private readonly apiUrl = '/api/signup';

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<{ error?: string }> {
    const body = JSON.stringify({ email, password });

    return this.http.post<{ error?: string }>(this.apiUrl, body).pipe(catchError((err) => of({ error: err.error.message })));
  }
}
