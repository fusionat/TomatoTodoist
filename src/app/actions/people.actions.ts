import { Action } from "@ngrx/store";
import { Characters } from "../models/people";
import { Character } from "./../models/people";

export enum PeopleActionTypes {
  LoadPeople = "[People] Load People",
  LoadPeopleSuccess = "[People] Load People Success",
  LoadPersonById = "[People] Load Person By Id"
}

export class LoadPeople implements Action {
  readonly type = PeopleActionTypes.LoadPeople;
}

export class LoadPeopleSuccess implements Action {
  readonly type = PeopleActionTypes.LoadPeopleSuccess;
  constructor(public payload: Characters) {}
}

export class LoadPersonById implements Action {
  readonly type = PeopleActionTypes.LoadPersonById;
  constructor(public payload: Character) {}
}

export type PeopleActions = LoadPeople | LoadPersonById | LoadPeopleSuccess;
