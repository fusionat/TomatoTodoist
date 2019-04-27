import { Action } from '@ngrx/store';

export enum UiActionTypes {
  LoadUiActions = '[UiAction] Load UiActions',
  
  
}

export class LoadUiActions implements Action {
  readonly type = UiActionTypes.LoadUiActions;
}


export type UiActions = LoadUiActions;
