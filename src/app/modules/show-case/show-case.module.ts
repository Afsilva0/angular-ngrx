import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCaseRoutingModule } from './show-case-routing.module';
import { UiSearchComponent } from './components/ui-search/ui-search.component';
import { UiFilterComponent } from './components/ui-filter/ui-filter.component';
import { ShowCasePageComponent } from './page/show-case-page/show-case-page.component';
import { UiItemComponent } from './components/ui-item/ui-item.component';
import { UiBlockItemComponent } from './components/ui-block-item/ui-block-item.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromFeatureItems from './../../store/reducers/items.reducer';
import { ItemsEffects } from 'src/app/store/effects/items.effects';
import { FEATURE_REDUCER_TOKEN, getReducers } from 'src/app/store/app.state';

@NgModule({
  declarations: [
    UiSearchComponent,
    UiFilterComponent,
    ShowCasePageComponent,
    UiItemComponent,
    UiBlockItemComponent,
  ],
  imports: [
    CommonModule,
    ShowCaseRoutingModule,
    FormsModule,
    /*
     *StoreModule.forFeature Se utiliza para registrar los reducers de una feature
     */
    StoreModule.forFeature(
      fromFeatureItems.featureKey,
      fromFeatureItems.reducer
    ),
    /*
     *EffectsModule.forFeature SE utiliza para registrar los effects en el store
     */
    EffectsModule.forFeature([ItemsEffects]),
  ],
  providers: [
    /*
     *Se utiliza para proveer el reducer de una feature
     */
    {
      provide: FEATURE_REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
})
export class ShowCaseModule {}
