import { Action } from '@ngrx/store';

export enum PeopleActionTypes {
  LoadPeople = '[People] Load People',
  LoadPersonById = '[People] Load Person By Id',
  
}

export class LoadPeople implements Action {
  readonly type = PeopleActionTypes.LoadPeople;
}

export class LoadPersonById implements Action {
  readonly type = PeopleActionTypes.LoadPersonById;
}


export type PeopleActions = LoadPeople | LoadPersonById;
