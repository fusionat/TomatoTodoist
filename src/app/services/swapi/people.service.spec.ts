import { TestBed } from '@angular/core/testing';

import { CharactorsService } from './people.service';

describe('PeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactorsService = TestBed.get(CharactorsService);
    expect(service).toBeTruthy();
  });
});
