import { Action } from "@ngrx/store";
import { Characters } from "../models/characters";
import { Character } from "../models/characters";

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
  constructor(public payload: Characters) {}
}

export class LoadCharacterById implements Action {
  readonly type = CharactersActionTypes.LoadCharacterById;
  constructor(public payload: Character) {}
}

export type CharactersActions = LoadCharacters | LoadCharacterById | LoadCharactersSuccess;
