
import { AppState } from '../reducers/index';
import { createSelector } from '@ngrx/store';
import { Character, Characters } from './../models/characters';
export const selectCharacters = (state: AppState) => state.charcters;
export const getCharacters = createSelector(
  selectCharacters,
  charcters => charcters.characters
)

export const getCharacterByName = createSelector(
  getCharacters,
  (charcters: Characters, proms) => {
    if (!charcters.results){
      return;
    }

    let filterResult = charcters.results.filter( (character: Character) => {
      return character.name.toLowerCase() === proms.name.toLowerCase();
    })

    return filterResult.length > 0 ? filterResult[0] : null;
  }
)