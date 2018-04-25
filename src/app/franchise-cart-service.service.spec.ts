import { TestBed, inject } from '@angular/core/testing';

import { FranchiseCartServiceService } from './franchise-cart-service.service';

describe('FranchiseCartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FranchiseCartServiceService]
    });
  });

  it('should be created', inject([FranchiseCartServiceService], (service: FranchiseCartServiceService) => {
    expect(service).toBeTruthy();
  }));
});
