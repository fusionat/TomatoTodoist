import { Action } from '@ngrx/store';

export enum SwapiActionTypes {
  LoadSwapis = '[Swapi] Load Swapis',

}

export class LoadSwapis implements Action {
  readonly type = SwapiActionTypes.LoadSwapis;
}


export type SwapiActions = LoadSwapis;
