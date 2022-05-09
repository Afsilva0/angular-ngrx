import { itemsState } from '@core/models/items.state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess } from '../actions/items.actions';

export const initialState: itemsState = { loading: false, items: [] };

export const featureKey = 'items';

export const itemsFeature = createFeature({
  name: featureKey,
  reducer: createReducer(
    initialState,
    on(loadItems, (state) => {
      return { ...state, loading: true, items: [] };
    }),
    on(loadItemsSuccess, (state) => {
      return { ...state, loading: false };
    })
  ),
});

export const { name, reducer, selectItemsState, selectItems, selectLoading } =
  itemsFeature;
