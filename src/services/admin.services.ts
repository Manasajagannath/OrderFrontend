// orders.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.models';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private apiUrl = 'https://localhost:44316/api/Orders/admin'; // Change to your API URL

  constructor(private http: HttpClient) {}
 
  
  getOrders(orderId:number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}`);
  }

//   // Get user orders
//   getUserOrders(userId: number): Observable<Order[]> {
//     return this.http.get<Order[]>(`${this.apiUrl}/users?userId=${userId}`);
//   }
 
  // Add a new order
  addOrder(order: Order): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }

  // Update order
  updateOrder(order: Order): Observable<any> {
    return this.http.put(`${this.apiUrl}/${order.orderId}`, order);
  }
}
