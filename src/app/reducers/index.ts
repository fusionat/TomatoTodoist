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

  charcters: fromPeople.State;
}

export const reducers: ActionReducerMap<AppState> = {

  charcters: fromPeople.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
