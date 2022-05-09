import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';

import { select, Store } from '@ngrx/store';
import { loadItems } from 'src/app/store/actions/items.actions';
import * as fromFeatureItems from 'src/app/store/reducers/items.reducer';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {
  listItems: ItemModel[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    /*  this.showCase.getDataApi().subscribe((res) => {
      this.listItems = res;
    }); */

    this.store.dispatch(loadItems());
    console.log(
      this.store
        .pipe(select(fromFeatureItems.selectItems))
        .subscribe({ next: (res) => console.log(res) })
    );
    console.log(this.store);
  }
}
