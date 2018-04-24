import { TestBed, inject } from '@angular/core/testing';

import { GetFranchisesService } from './get-franchises.service';

describe('GetFranchisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFranchisesService]
    });
  });

  it('should be created', inject([GetFranchisesService], (service: GetFranchisesService) => {
    expect(service).toBeTruthy();
  }));
});
