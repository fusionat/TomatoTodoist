import { Action } from "@ngrx/store";
import { Character } from "../models/characters";
import { GroupModels } from './../models/group-models.model';

export enum CharactersActionTypes {
  LoadCharacters = "[People] Load People",
  LoadCharactersSuccess = "[People] Load People Success",
  LoadCharacterById = "[People] Load Person By Id"
}

export class LoadCharacters implements Action {
  readonly type = CharactersActionTypes.LoadCharacters;
}

export class LoadCharactersSuccess implements Action {
  readonly type = CharactersActionTypes.LoadCharactersSuccess;
  constructor(public payload: GroupModels<Character>) {}
}

export class LoadCharacterById implements Action {
  readonly type = CharactersActionTypes.LoadCharacterById;
  constructor(public payload: Character) {}
}

export type CharactersActions = LoadCharacters | LoadCharacterById | LoadCharactersSuccess;
