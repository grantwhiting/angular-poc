import { Component, OnInit } from '@angular/core';
import { Franchise } from '../franchise';
import { GetFranchisesService } from '../get-franchises.service';
import { FranchiseCartServiceService } from '../franchise-cart-service.service';

@Component({
  selector: 'app-franchise-list-page',
  templateUrl: './franchise-list-page.component.html',
  styleUrls: ['./franchise-list-page.component.css']
})
export class FranchiseListPageComponent implements OnInit {
  franchises: Franchise[];
  franchiseCart: Franchise[] = [];

  constructor(
    private _franchiseService: GetFranchisesService,
    private _franchiseCartService: FranchiseCartServiceService
  ) { }

  ngOnInit() {
    this.getFranchises();
    this.getFranchiseCart();
  }

  getFranchiseCart(): void {
    this._franchiseCartService.currentCart
      .subscribe(franchiseCart => this.franchiseCart = franchiseCart);
  }

  getFranchises(): void {
    this._franchiseService.getFranchises()
      .subscribe(response => this.franchises = response);
  }

  addToFranchiseCart(franchise: Franchise): void {
    this.franchiseCart.push(franchise);
    this._franchiseCartService.updateCart(this.franchiseCart);
  }

  removeFromFranchiseCart(franchise: Franchise): void {
    this.franchiseCart = this.franchiseCart.filter((item: Franchise) => item.franchiseId !== franchise.franchiseId);
    this._franchiseCartService.updateCart(this.franchiseCart);
  }

  trackById(idx: number, franchise: Franchise): number {
    return franchise.franchiseId;
  }

  franchiseInCart(franchise: Franchise): boolean {
    return this.franchiseCart.includes(franchise);
  }

}
