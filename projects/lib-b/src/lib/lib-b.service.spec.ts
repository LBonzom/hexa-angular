import { TestBed } from '@angular/core/testing';

import { LibBService } from './lib-b.service';

describe('LibBService', () => {
  let service: LibBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
