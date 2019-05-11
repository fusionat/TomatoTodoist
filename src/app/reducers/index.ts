import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPeople from './people.reducer';

export interface AppState {

  people: fromPeople.State;
}

export const reducers: ActionReducerMap<AppState> = {

  people: fromPeople.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
