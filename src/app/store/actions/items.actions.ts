import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

/*
 *Actions para cargar los items
 */
export const loadItems = createAction('[Items] Load Items');

/*
 *Actions para items cargados correctamente
 */
export const loadItemsSuccess = createAction(
  '[Items] Load Items Success',
  props<{ items: ItemModel[] }>()
);
