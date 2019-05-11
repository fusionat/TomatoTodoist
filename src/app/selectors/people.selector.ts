
import { AppState } from './../reducers/index';
import { createSelector } from '@ngrx/store';
export const selectPeople = (state: AppState) => state.people;
export const getPeople = createSelector(
  selectPeople,
  people => people.people
)