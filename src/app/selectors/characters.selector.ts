
import { AppState } from '../reducers/index';
import { createSelector } from '@ngrx/store';
export const selectCharacters = (state: AppState) => state.charcters;
export const getCharacters = createSelector(
  selectCharacters,
  charcters => charcters.characters
)