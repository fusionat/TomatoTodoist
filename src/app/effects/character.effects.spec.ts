import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CharactersEffects } from './character.effects';

describe('CharactersEffects', () => {
  let actions$: Observable<any>;
  let effects: CharactersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharactersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CharactersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
