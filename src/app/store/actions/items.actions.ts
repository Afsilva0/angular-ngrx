import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Items] Load Items');
export const loadItemsSuccess = createAction(
  '[Items] Load Items Success',
  props<{ items: ItemModel[] }>()
);
