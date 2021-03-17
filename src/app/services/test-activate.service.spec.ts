import { TestBed } from '@angular/core/testing';

import { TestActivateService } from './test-activate.service';

describe('TestActivateService', () => {
  let service: TestActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
