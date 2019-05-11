import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPeople from './people.reducer';

export interface State {

  people: fromPeople.State;
}

export const reducers: ActionReducerMap<State> = {

  people: fromPeople.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
