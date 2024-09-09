import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'order-module';
  orderDetails: any[] = [];
  orderToUpdate: any = {
    orderId: null,
    customerId: null,
    storeId: null,
    orderDate: '',
    totalPrice: 0,
    status: ''
  };

  constructor(private orderService: OrderService) {
    this.getOrderDetails();
  }

  register(registerForm: NgForm) {
    this.orderService.registerOrder(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getOrderDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getOrderDetails() {
    this.orderService.getOrders().subscribe(
      (resp: any) => {
        console.log(resp);
        this.orderDetails = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  deleteOrder(order: any) {
    this.orderService.deleteOrder(order.orderId).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getOrderDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  edit(order: any) {
    this.orderToUpdate = { ...order };
  }

  updateOrder() {
    this.orderService.updateOrder(this.orderToUpdate).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getOrderDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
