
import { CharactersActionTypes, CharactersActions } from '../actions/people.actions'
import { Characters } from '../models/characters';

export interface State {
  characters: Characters
}

export const initialState: State = {
  characters : new Characters()
};

export function reducer(state = initialState, action: CharactersActions): State {
  switch (action.type) {
    case CharactersActionTypes.LoadCharacters:
      return {...state };
    case CharactersActionTypes.LoadCharactersSuccess:
      return {...state, characters: action.payload }
    default:
      return state;
  }
}
