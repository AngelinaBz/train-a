import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../../orders/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrlOrder = '/api/order';

  constructor(private http: HttpClient) {}

  createOrder(
    token: string,
    order: { rideId: number; seat: number; stationStart: number; stationEnd: number },
  ): Observable<Order> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<Order>(this.apiUrlOrder, order, { headers });
  }
}
