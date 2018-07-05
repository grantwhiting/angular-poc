import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseDetailComponent } from './franchise-detail.component';
import { GetFranchisesService } from '../get-franchises.service';

xdescribe('FranchiseDetailComponent', () => {
  let component: FranchiseDetailComponent;
  let fixture: ComponentFixture<FranchiseDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ FranchiseDetailComponent ],
      providers: [
        GetFranchisesService,
        Router,
        { provider: ActivatedRoute, useValue: fakeActivatedRoute }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
