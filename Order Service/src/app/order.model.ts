export interface Order {
  orderId: number;
  customerId: number;
  storeId: number;
  orderDate: Date;
  totalPrice: number;
  status: string;
}
