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



  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getAdminOrders();
  }

  getAdminOrders(): void {
    this.ordersService.getAdminOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }
  getOrders(): void {
    this.ordersService.getOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log(this.orders); // Debug: Log the fetched orders here
      },
      (error) => {
        console.error('Error fetching orders:', error); // Handle error case
      }
    );
  }

  updateOrder(order: Order): void {
    // You can implement functionality to update the order status
    this.ordersService.updateOrder(order).subscribe(() => {
      alert('Order updated successfully');
    });
  }

  rateOrder(order: Order): void {
    // Implement the logic to open a modal or navigate to a rating/review page.
    console.log('Rating order', order.orderId);
  }
  
}
