import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { PeopleService } from "./../services/swapi/people.service";
import { EMPTY } from "rxjs";
import { LoadPeopleSuccess, LoadPeople, PeopleActionTypes } from './../actions/people.actions';

@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}

  @Effect()
  loadPeople$ = this.actions$.pipe(
    ofType(PeopleActionTypes.LoadPeople),
    mergeMap(() =>
      this.peopleService.getAll().pipe(
        map(people => new LoadPeopleSuccess(people)),
        catchError(er => {
          console.log("ERRRROR");
          return EMPTY;
        })
      )
    )
  );
}
