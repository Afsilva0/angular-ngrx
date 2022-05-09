import { ItemModel } from './Item.interface';

export interface itemsState {
  loading: boolean;
  items: ItemModel[];
}
