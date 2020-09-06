import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  name1;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: 'Your Name',
      address: 'Your Address'
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    
    this.name1 = customerData.name;
    window.alert(this.name1);
    console.warn('Your order has been submitted', customerData);
  }

}