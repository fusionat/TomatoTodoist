
import { CharactersActionTypes, CharactersActions } from '../actions/people.actions'
import { GroupModels } from './../models/group-models.model';
import { Character } from './../models/characters';

export interface State {
  characters: GroupModels<Character>
}

export const initialState: State = {
  characters : new GroupModels<Character>()
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
