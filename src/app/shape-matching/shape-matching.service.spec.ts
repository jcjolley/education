import { TestBed, inject } from '@angular/core/testing';

import { ShapeMatchingService } from './shape-matching.service';

describe('ShapeMatchingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShapeMatchingService]
    });
  });

  it('should be created', inject([ShapeMatchingService], (service: ShapeMatchingService) => {
    expect(service).toBeTruthy();
  }));
});
