import { Component, OnInit } from '@angular/core';
import { Franchise } from '../franchise';
import { GetFranchisesService } from '../get-franchises.service';

@Component({
  selector: 'app-franchise-list-page',
  templateUrl: './franchise-list-page.component.html',
  styleUrls: ['./franchise-list-page.component.css']
})
export class FranchiseListPageComponent implements OnInit {
  public franchises: Franchise[];
  public sentToCart: boolean;

  constructor(private _franchiseService: GetFranchisesService) { }

  ngOnInit() {
    this.getFranchises();
  }

  getFranchises(): void {
    this._franchiseService.getFranchises()
      .subscribe((response) => this.franchises = response);
  }

  itemToIndex(item: any): number {
    return item.index
  }

  addToCart(): void {
    this.sentToCart = true;
  }

  removeFromCart(): void {
    this.sentToCart = false;
  }

}
