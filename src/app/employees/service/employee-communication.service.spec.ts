import { TestBed } from '@angular/core/testing';

import { EmployeeCommunicationService } from './employee-communication.service';

describe('EmployeeCommunicationService', () => {
  let service: EmployeeCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
