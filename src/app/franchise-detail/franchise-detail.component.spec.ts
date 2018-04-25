import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseDetailComponent } from './franchise-detail.component';

describe('FranchiseDetailComponent', () => {
  let component: FranchiseDetailComponent;
  let fixture: ComponentFixture<FranchiseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseDetailComponent ]
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
