import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Franchise } from './franchise';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetFranchisesService {
  franchiseApiUrl = 'http://api-main.dev.bizbuysell.com/franchise/api/franchise';

  constructor(private _http: HttpClient) { }

  public getFranchises(): Observable<Franchise[]> {
    return this._http.get<Franchise[]>(this.franchiseApiUrl)
      .catch((e: any) => Observable.throw(console.log(e)));
  }

  public getSingleFranchise(shortName: string): Observable<Franchise> {
    return this._http.get<Franchise>(`${this.franchiseApiUrl}/${shortName}`);
  }
}
