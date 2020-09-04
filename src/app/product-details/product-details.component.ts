import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail;
              //Injector
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  add(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    console.log("You just bought: " + JSON.stringify(product));  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(this.productDetail); //undefined
      this.productDetail = products[+params.get('productId')]; //nimmt die productId im URL
      console.log(this.productDetail);
      console.log(products); //Object products
      console.log(products[0]);
      console.log(products[0].name) //Phone XL
    });
  }

}