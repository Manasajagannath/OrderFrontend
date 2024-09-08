// orders.component.ts
import { Component, OnInit } from '@angular/core';


import { OrdersService } from '../../services/orders.services';
import { Order } from '../../models/order.models';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  userId:number=1;



  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  
  getOrders(): void {
    this.ordersService.getUserOrders(this.userId).subscribe(
      (data) => {
        this.orders = data;
        console.log(this.orders); // Debug: Log the fetched orders here
      },
      (error) => {
        console.error('Error fetching orders:', error); // Handle error case
      }
    );
  }

 

  rateOrder(order: Order): void {
    // Implement the logic to open a modal or navigate to a rating/review page.
    console.log('Rating order', order.orderId);
  }
  
}
