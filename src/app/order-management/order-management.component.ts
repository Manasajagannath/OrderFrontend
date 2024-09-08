import { Component, OnInit } from '@angular/core';
 // Corrected import path
import { Order } from '../../models/order.models'; // Corrected import path
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminService } from '../../services/admin.services';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-management.component.html', // Corrected template URL
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
  orders: Order[] = [];
  selectedOrder?: Order | null = null; // Initialize selectedOrder
  modalRef?: BsModalRef;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getOrders(); // Fetch orders on component initialization
  }

  // getOrders(): void {
  //   const userId = 1; // Provide a user ID or get it from authentication service
  //   this.ordersService.getUserOrders(userId).subscribe(
  //     (data) => {
  //       this.orders = data;
  //       console.log(this.orders); // Debug: Log the fetched orders here
  //     },
  //     (error) => {
  //       console.error('Error fetching orders:', error); // Handle error case
  //     }
  //   );
  // }

  getOrders(): void {
    this.adminService.getOrders(this.orderId).subscribe(
      (data) => {
        this.orders = data;
        console.log(this.orders); // Debug: Log the fetched orders here
      },
      (error) => {
        console.error('Error fetching orders:', error); // Handle error case
      }
    );
  }
  viewOrder(order: Order): void {
    this.selectedOrder = order;
     $('#viewOrderModal').modal('show'); // Show modal using jQuery
  }

  editOrder(order: Order): void {
    this.selectedOrder = order;
    $('#editOrderModal').Modal('show'); // Show modal using jQuery
  }

  fulfillOrder(order: Order): void {
    // Implement fulfill order logic here
    console.log('Fulfilling order', order.orderId);
    // Optionally update the order status and save changes
  }

  saveOrderChanges(): void {
    if (this.selectedOrder) {
      // Implement save order changes logic here
      console.log('Saving changes for order', this.selectedOrder.orderId);
      $('#editOrderModal').modal('hide'); // Hide modal after saving changes
    }
  }
}
