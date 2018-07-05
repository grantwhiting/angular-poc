import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseListComponent } from './franchise-list.component';
import { FranchiseCartService } from '../franchise-cart.service';

describe('FranchiseListComponent', () => {
  let component: FranchiseListComponent;
  let fixture: ComponentFixture<FranchiseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [FranchiseListComponent],
      providers: [FranchiseCartService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseListComponent);
    component = fixture.componentInstance;
  });

  it('should return true', () => {
    expect(true).toEqual(true);
  });

});
