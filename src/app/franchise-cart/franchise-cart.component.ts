import { FranchiseCartService } from '../franchise-cart.service';
import { Component, OnInit, Input, AfterContentChecked, HostListener } from '@angular/core';
import { Franchise } from '../franchise';

@Component({
  selector: 'app-franchise-cart',
  templateUrl: './franchise-cart.component.html',
  styleUrls: ['./franchise-cart.component.scss']
})
export class FranchiseCartComponent implements OnInit, AfterContentChecked {
  cart: Franchise[] = [];
  @Input() franchises: Franchise[] = [];
  cartIsFixed = false;

  constructor(
    private _franchiseCartService: FranchiseCartService
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
    this.removeFromLocalStorage(franchise);
  }

  removeFromLocalStorage(franchise: Franchise): void {
    localStorage.removeItem(`franchise_${franchise.franchiseId}`);
  }

  helloWorld(): string {
    return 'Hello world!';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const scrollTop = $event.target.documentElement.scrollTop;
    const cart = document.getElementById('franchiseContactCart');
    if (scrollTop >= 39) {
      this.cartIsFixed = true;
    } else {
      this.cartIsFixed = false;
    }
  }

}
