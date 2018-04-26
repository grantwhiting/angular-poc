import { FranchiseCartServiceService } from './../franchise-cart-service.service';
import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Franchise } from '../franchise';

@Component({
  selector: 'app-franchise-cart',
  templateUrl: './franchise-cart.component.html',
  styleUrls: ['./franchise-cart.component.scss']
})
export class FranchiseCartComponent implements OnInit, AfterContentChecked {
  cart: Franchise[] = [];
  @Input() franchises: Franchise[] = [];

  constructor(
    private _franchiseCartService: FranchiseCartServiceService
  ) { }

  ngOnInit() {
    this.getCart();
  }

  ngAfterContentChecked() {
    this.getFranchisesInStorage();
  }

  getFranchisesInStorage(): void {
    if (this.franchises) {
      this.cart = this.franchises.filter((franchise: Franchise) => localStorage.getItem(`franchise_${franchise.franchiseId}`));
    }
  }

  getCart(): void {
    this._franchiseCartService.currentCart
      .subscribe(cart => this.cart = cart);
  }

  removeFromFranchiseCart(franchise: Franchise): void {
    this.cart = this.cart.filter((item: Franchise) => item.franchiseId !== franchise.franchiseId);
    this._franchiseCartService.updateCart(this.cart);
    localStorage.removeItem(`franchise_${franchise.franchiseId}`);
  }

}
