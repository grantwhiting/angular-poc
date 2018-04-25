import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Franchise } from './franchise';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetFranchisesService {
  private _franchiseApiUrl = 'http://api-main.dev.bizbuysell.com/franchise/api/franchise/';

  constructor(private _http: HttpClient) { }

  getFranchises(): Observable<Franchise[]> {
    return this._http.get<Franchise[]>(this._franchiseApiUrl)
      .catch((e: any) => Observable.throw(console.log(e)));
  }

  getSingleFranchise(shortName: string): Observable<Franchise> {
    return this._http.get<Franchise>(`${this._franchiseApiUrl}/${shortName}`);
  }
}
