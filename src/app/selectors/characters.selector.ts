import { AppState } from "../reducers/index";
import { createSelector } from "@ngrx/store";
import { Character } from "./../models/characters";
import { GroupModels } from "./../models/group-models.model";
export const selectCharacters = (state: AppState) => state.charcters;
export const getCharacters = createSelector(
  selectCharacters,
  characters => characters.characters
);

export const getCharacterByName = createSelector(
  getCharacters,
  (characters: GroupModels<Character>, proms) => {
    if (!characters.results) {
      return;
    }

    let filterResult = characters.results.filter((character: Character) => {
      return character.name.toLowerCase() === proms.name.toLowerCase();
    });

    return filterResult.length > 0 ? filterResult[0] : null;
  }
);

export const getCharacterById = createSelector(
  getCharacters,
  (characters: GroupModels<Character>, proms) => {
    if (!characters.results) {
      return;
    }

    let filterResult = characters.results.filter((character: Character) => {
      return character.id === proms.id;
    });

    return filterResult.length > 0 ? filterResult[0] : null;
  }
);
