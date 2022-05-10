import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromFeatureItems from 'src/app/store/reducers/items.reducer';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css'],
})
export class UiBlockItemComponent implements OnInit {
  $items: Observable<any> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    /* 
    *Alternativa para realizaar la carga de datos:
    this.store
    .pipe(select(fromFeatureItems.selectItems))
    .subscribe({
       next: (res) => console.log(res) 
      });
     */
    this.$items = this.store.select(fromFeatureItems.selectItems);
  }
}
