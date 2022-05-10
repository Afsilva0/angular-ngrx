import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems } from 'src/app/store/actions/items.actions';
import * as fromFeatureItems from 'src/app/store/reducers/items.reducer';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  listItems: ItemModel[] = [];
  $loading: Observable<boolean> = new Observable();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    /* 
    *Alternativa para realizaar la carga de datos:
    this.store
    .pipe(select(fromFeatureItems.selectLoading))
    .subscribe({
       next: (res) => console.log(res) 
      });
     */
    this.$loading = this.store.select(fromFeatureItems.selectLoading);

    /*
     *Forma de ejectuar una accion
     *En este caso para cargar los datos
     */
    this.store.dispatch(loadItems());
  }
}
