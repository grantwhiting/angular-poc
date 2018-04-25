import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Franchise } from './franchise';

@Injectable()
export class FranchiseCartServiceService {
  private _cartSource = new BehaviorSubject<Franchise[]>([]);
  public currentCart = this._cartSource.asObservable();

  constructor() { }

  public updateCart(franchises: Franchise[]): void {
    this._cartSource.next(franchises);
  }

}
