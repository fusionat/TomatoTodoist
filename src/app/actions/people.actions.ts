import { Action } from '@ngrx/store';
import { Characters } from '../models/people';
import { Character } from './../models/people';

export enum PeopleActionTypes {
  LoadPeople = '[People] Load People',
  LoadPersonById = '[People] Load Person By Id',
  
}

export class LoadPeople implements Action {
  readonly type = PeopleActionTypes.LoadPeople;
  constructor(public payload: Characters) {}
}

export class LoadPersonById implements Action {
  readonly type = PeopleActionTypes.LoadPersonById;
  constructor(public payload: Character) {}
}


export type PeopleActions = LoadPeople | LoadPersonById;
