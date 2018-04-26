import { Component, OnInit, Input } from '@angular/core';
import { Franchise } from '../franchise';
import { FranchiseCartServiceService } from '../franchise-cart-service.service';

@Component({
  selector: 'app-franchise-list',
  templateUrl: './franchise-list.component.html',
  styleUrls: ['./franchise-list.component.scss']
})
export class FranchiseListComponent implements OnInit {
  // @Input() franchiseProps: Franchise[];
  @Input() franchises: Franchise[];
  franchiseCart: Franchise[] = [];

  constructor(
    private _franchiseCartService: FranchiseCartServiceService
  ) { }

  ngOnInit() {
    this.getFranchiseCart();
  }

  getFranchiseCart(): void {
    this._franchiseCartService.currentCart
      .subscribe(franchiseCart => this.franchiseCart = franchiseCart);
  }

  addToFranchiseCart(franchise: Franchise): void {
    this.franchiseCart.push(franchise);
    this._franchiseCartService.updateCart(this.franchiseCart);
    this.setLocalStorage(franchise);
  }

  removeFromFranchiseCart(franchise: Franchise): void {
    debugger;
    this.franchiseCart = this.franchiseCart.filter((item: Franchise) => item.franchiseId !== franchise.franchiseId);
    this._franchiseCartService.updateCart(this.franchiseCart);
    this.removeLocalStorage(franchise);
  }

  setLocalStorage(franchise: Franchise): void {
    localStorage.setItem(`franchise_${franchise.franchiseId.toString()}`, JSON.stringify(franchise));
  }

  removeLocalStorage(franchise: Franchise): void {
    localStorage.removeItem(`franchise_${franchise.franchiseId.toString()}`);
  }

  trackById(idx: number, franchise: Franchise): number {
    return franchise.franchiseId;
  }

  franchiseInCart(franchise: Franchise): boolean {
    return localStorage.getItem(`franchise_${franchise.franchiseId.toString()}`) !== null;
  }

}
