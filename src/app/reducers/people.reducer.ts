import { Action } from '@ngrx/store';
import { PeopleActions, PeopleActionTypes } from '../actions/people.actions'
import { Character, Characters } from './../models/people';

export interface State {
  people: Characters
}

export const initialState: State = {
  people : new Characters()
};

export function reducer(state = initialState, action: PeopleActions): State {
  switch (action.type) {
    case PeopleActionTypes.LoadPeople:
      return {...state, people: action.payload }
    default:
      return state;
  }
}
