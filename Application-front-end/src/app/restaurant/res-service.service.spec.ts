import { TestBed } from '@angular/core/testing';

import { ResServiceService } from './res-service.service';

describe('ResServiceService', () => {
  let service: ResServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
