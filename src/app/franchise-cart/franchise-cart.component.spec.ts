// import { FranchiseCartServiceService } from '../franchise-cart.service';
import { Franchise } from '../franchise';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FranchiseCartComponent } from './franchise-cart.component';

// describe('FranchiseCartComponent', () => {
//   let component: FranchiseCartComponent;
//   let fixture: ComponentFixture<FranchiseCartComponent>;
//   let franchiseCartService: FranchiseCartServiceService;
//   // const franchiseCartService = {
//   //   getStuff: () => {}
//   // };

//   beforeEach(async(() => {
//     const spy = jasmine.createSpyObj('FranchiseCartServiceService', ['updateCart']);
//     TestBed.configureTestingModule({
//       declarations: [ FranchiseCartComponent ],
//       providers: [ { provide: FranchiseCartServiceService } ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FranchiseCartComponent);
//     component = fixture.componentInstance;
//     franchiseCartService = TestBed.get(FranchiseCartServiceService);
//     fixture.detectChanges();
//   });

//   describe('helloWorld method', () => {
//     it('should return "Hello world!"', () => {
//       expect(component.helloWorld()).toEqual('Hello world!');
//     });
//   });
// });
