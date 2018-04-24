import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Franchise } from './franchise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetFranchisesService {

  constructor(private _http: HttpClient) { }

  getFranchises(): Observable<Franchise[]> {
    return this._http.get<Franchise[]>('http://api-main.dev.bizbuysell.com/franchise/api/franchise/');
  }

}
