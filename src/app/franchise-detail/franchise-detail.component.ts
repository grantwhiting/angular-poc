import { Observable } from 'rxjs/Observable';
import { GetFranchisesService } from './../get-franchises.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Franchise } from '../franchise';

@Component({
  selector: 'app-franchise-detail',
  templateUrl: './franchise-detail.component.html',
  styleUrls: ['./franchise-detail.component.scss']
})
export class FranchiseDetailComponent implements OnInit {
  franchise$: Observable<Franchise>;
  franchise: Franchise;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: GetFranchisesService
  ) { }

  ngOnInit() {
    this.franchise$ = this._route.paramMap
      .switchMap((params: ParamMap) => this._service.getSingleFranchise(params.get('shortname')));
    this.franchise$.subscribe(response => this.franchise = response[0]);
  }

}
