import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseListPageComponent } from './franchise-list-page.component';

describe('FranchiseListPageComponent', () => {
  let component: FranchiseListPageComponent;
  let fixture: ComponentFixture<FranchiseListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
