import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';  // Make sure to adjust the path if needed

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API = "http://localhost:8080/orderservice";

  constructor(private http: HttpClient) { }
  

  public registerOrder(orderData: Order) {
    return this.http.post(this.API, orderData);
  }

  public getOrders() {
    return this.http.get<Order[]>(this.API);
  }

  public deleteOrder(orderId: number) {
    return this.http.delete(`${this.API}/${orderId}`);
  }

  public updateOrder(order: Order) {
    return this.http.put(`${this.API}/${order.orderId}`, order);
  }
}
