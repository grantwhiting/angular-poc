import { Franchise } from './franchise';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { GetFranchisesService } from './get-franchises.service';

describe('GetFranchisesService', () => {
  let service: GetFranchisesService;
  let httpMock: HttpTestingController;

  // create fake data to test against
  const dummyFranchises: Franchise[] = [{
    franchiseId: 15700,
    name: 'Dryer Vent Squad',
    shortName: 'Dryer Vent Squad',
    address: '5001 1st Ave. SE, Ste. 105-229',
    address2: null,
    city: 'Cedar Rapids',
    stateId: 17,
    zip: '52402',
    countryId: 1,
    localPhone: '3194316044',
    minCapitalMin: 35000,
    minCapitalMax: 35000,
    minWorthMin: 55000,
    minWorthMax: 55000,
    franchiseFeeMin: null,
    franchiseFeeMax: null,
    totalInvestmentMin: 0,
    totalInvestmentMax: 47000,
    lowCost: null,
    businessOpportunity: null,
    highCapital: null,
    shortDescription: 'Join a rapidly growing service industry - a low investment franchise with enormous growth potential!',
    generalDescription: null,
    createdDate: new Date(2018, 5, 12, 25, 3, 193),
    franchiseImage: {
      imageId: 3214,
      displayImage: '15700_120x60.gif',
      imageWidth: 120,
      franchiseId: 15700
    }
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ GetFranchisesService ]
    });

    service = TestBed.get(GetFranchisesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /* MUST HAVE ERROR LOGGING: error => console.log(error)) */

   it('should fetch franchises from the API via GET', () => {
     service.getFranchises().subscribe(result => {
       expect(result.length).toBeGreaterThan(0);
     }, error => console.log(error));

     const request = httpMock.expectOne(service.franchiseApiUrl);

     expect(request.request.method).toBe('GET');
     request.flush(dummyFranchises);
   });

  //  it('should fetch one franchise', () => {
  //    const franchiseShortName = 'Dryer Vent Squad';
  //    service.getSingleFranchise(franchiseShortName).subscribe(result => {
  //      expect(result).not.toBeNull();
  //    }, error => console.log(error));
  //  });
});
