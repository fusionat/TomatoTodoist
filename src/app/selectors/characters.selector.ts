
import { AppState } from '../reducers/index';
import { createSelector } from '@ngrx/store';
import { Character, Characters } from './../models/characters';
export const selectCharacters = (state: AppState) => state.charcters;
export const getCharacters = createSelector(
  selectCharacters,
  characters => characters.characters
)

export const getCharacterByName = createSelector(
  getCharacters,
  (characters: Characters, proms) => {
    if (!characters.results){
      return;
    }

    let filterResult = characters.results.filter( (character: Character) => {    
      return character.name.toLowerCase() === proms.name.toLowerCase();
    })

    return filterResult.length > 0 ? filterResult[0] : null;
  }
)