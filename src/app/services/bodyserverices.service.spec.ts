import { TestBed } from '@angular/core/testing';

import { BodyservericesService } from './bodyserverices.service';

describe('BodyservericesService', () => {
  let service: BodyservericesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyservericesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
