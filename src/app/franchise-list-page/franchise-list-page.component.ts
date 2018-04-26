import { GetFranchisesService } from './../get-franchises.service';
import { Component, OnInit } from '@angular/core';
import { Franchise } from '../franchise';

@Component({
  selector: 'app-franchise-list-page',
  templateUrl: './franchise-list-page.component.html',
  styleUrls: ['./franchise-list-page.component.scss']
})
export class FranchiseListPageComponent implements OnInit {
  franchises: Franchise[];

  constructor(
    private _getFranchisesService: GetFranchisesService
  ) { }

  ngOnInit() {
    this.getFranchises();
  }

  getFranchises(): void {
    this._getFranchisesService.getFranchises()
      .subscribe(franchises => this.franchises = franchises);
  }
}
