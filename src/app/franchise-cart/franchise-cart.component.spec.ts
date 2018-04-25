import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseCartComponent } from './franchise-cart.component';

describe('FranchiseCartComponent', () => {
  let component: FranchiseCartComponent;
  let fixture: ComponentFixture<FranchiseCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
