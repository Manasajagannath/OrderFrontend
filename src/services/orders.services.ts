// orders.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.models';


@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  private apiUrl = 'https://localhost:44316/api/Orders'; // Change to your API URL
 userId=1;
  constructor(private http: HttpClient) {}
 // Get all orders (Admin)
 
  // Get user orders
  getUserOrders(userId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/users?userId=${userId}`);
  }
 
  
 
}
