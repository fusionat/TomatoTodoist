import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { CharactorsService } from "./../services/swapi/people.service";
import { EMPTY } from "rxjs";
import { LoadCharactersSuccess, LoadCharacters, CharactersActionTypes } from './../actions/people.actions';
import { Character } from '../models/characters';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactorsService: CharactorsService
  ) {}

  @Effect()
  loadPeople$ = this.actions$.pipe(
    ofType(CharactersActionTypes.LoadCharacters),
    mergeMap(() =>
      this.charactorsService.getAll().pipe(
        map(characters => new LoadCharactersSuccess(characters)),
        catchError(er => {
          console.log("ERRRROR");
          return EMPTY;
        })
      )
    )
  );
}
