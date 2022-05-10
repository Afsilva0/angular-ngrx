import { itemsState } from '@core/models/items.state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { loadItems, loadItemsSuccess } from '../actions/items.actions';

/*
 *initialState: itemsState;
 *Estado inicial del reducer
 */
export const initialState: itemsState = { loading: false, items: [] };

/*
 *featureKey: nombre del feature
 */
export const featureKey = 'items';

/*
 *CreateFeature:
 *@param featureKey: string
 *@param initialState: itemsState
 *@param reducers: ActionReducerMap<itemsState>
 *@returns itemsState
 *Se usa para crear un feature es decir un reducer para manejo de modulos con carga peresoza
 */
export const itemsFeature = createFeature({
  name: featureKey,
  reducer: createReducer(
    initialState,
    on(loadItems, (state) => {
      return { ...state, loading: true, items: [] };
    }),
    on(loadItemsSuccess, (state, { items }) => {
      return { ...state, loading: false, items };
    })
  ),
});

/*
 *Selectors:
 *@param state: itemsState
 *@returns itemsState
 *Se usa para obtener el estado de un feature
 */
export const { name, reducer, selectItemsState, selectItems, selectLoading } =
  itemsFeature;
