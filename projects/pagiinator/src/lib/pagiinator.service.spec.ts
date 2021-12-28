import { TestBed } from '@angular/core/testing';

import { PagiinatorService } from './pagiinator.service';

describe('PagiinatorService', () => {
  let service: PagiinatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagiinatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
