import { FranchiseCartServiceService } from './../franchise-cart-service.service';
import { Component, OnInit } from '@angular/core';
import { Franchise } from '../franchise';

@Component({
  selector: 'app-franchise-cart',
  templateUrl: './franchise-cart.component.html',
  styleUrls: ['./franchise-cart.component.css']
})
export class FranchiseCartComponent implements OnInit {
  cart: Franchise[] = [];

  constructor(
    private _franchiseCartService: FranchiseCartServiceService
  ) { }

  ngOnInit() {
    this.getCart();
  }

  getCart(): void {
    this._franchiseCartService.currentCart
      .subscribe(cart => this.cart = cart);
  }

  removeFromFranchiseCart(franchise: Franchise): void {
    this.cart = this.cart.filter((item: Franchise) => item.franchiseId !== franchise.franchiseId);
    this._franchiseCartService.updateCart(this.cart);
  }

}
