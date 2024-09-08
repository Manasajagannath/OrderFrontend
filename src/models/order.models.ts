// order.model.ts
export interface Order {
    orderId: number;
    userId: number;
    cartId: number;
    orderStatus: string;
    totalAmount: number;
    shippingAddress: string;
    paymentMethod: string;
    orderDate: Date;
  }
  