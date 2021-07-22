import { TestBed } from '@angular/core/testing';

import { LibAService } from './lib-a.service';

describe('LibAService', () => {
  let service: LibAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
