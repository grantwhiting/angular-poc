import { Component, OnInit, Input } from '@angular/core';
import { Franchise } from '../franchise';
import { FranchiseCartService} from '../franchise-cart.service';

@Component({
  selector: 'app-franchise-list',
  templateUrl: './franchise-list.component.html',
  styleUrls: ['./franchise-list.component.scss']
})
export class FranchiseListComponent implements OnInit {
  @Input() franchises: Franchise[];
  franchiseCart: Franchise[] = [];

  constructor(
    private _franchiseCartService: FranchiseCartService
  ) { }

  ngOnInit() {
    this.getFranchiseCart();
  }

  private _updateFranchiseCartComponent(franchiseCart: Franchise[]): void {
    this._franchiseCartService.updateCart(franchiseCart);
  }

  private _addToLocalStorage(franchise: Franchise): void {
    localStorage.setItem(`franchise_${franchise.franchiseId.toString()}`, JSON.stringify(franchise));
  }

  private _removeFromLocalStorage(franchise: Franchise): void {
    localStorage.removeItem(`franchise_${franchise.franchiseId.toString()}`);
  }

  getFranchiseCart(): void {
    this._franchiseCartService.currentCart
      .subscribe(franchiseCart => this.franchiseCart = franchiseCart);
  }

  addToFranchiseCart(franchise: Franchise): void {
    const newFranchiseCart = this.franchiseCart;
    newFranchiseCart.push(franchise);
    this._updateFranchiseCartComponent(newFranchiseCart);
    this._addToLocalStorage(franchise);
  }

  removeFromFranchiseCart(franchise: Franchise): void {
    const newFranchiseCart = this.franchiseCart.filter((item: Franchise) => item.franchiseId !== franchise.franchiseId);
    this._updateFranchiseCartComponent(newFranchiseCart);
    this._removeFromLocalStorage(franchise);
  }

  trackById(idx: number, franchise: Franchise): number {
    return franchise.franchiseId;
  }

  franchiseInCart(franchise: Franchise): boolean {
    return localStorage.getItem(`franchise_${franchise.franchiseId.toString()}`) !== null;
  }

}
