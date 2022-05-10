import { InjectionToken } from '@angular/core';
import { itemsState } from '@core/models/items.state';
import { ActionReducerMap } from '@ngrx/store';

import * as fromFeatureItems from './reducers/items.reducer';

export interface AppState {
  items: itemsState;
}

export const FEATURE_REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<AppState>
>('Feature Reducers');

export function getReducers(): ActionReducerMap<AppState> {
  return { items: fromFeatureItems.reducer };
}
