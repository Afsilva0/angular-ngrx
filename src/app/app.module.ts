import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromFeatureItems from './store/reducers/items.reducer';
import { FEATURE_REDUCER_TOKEN, getReducers } from './store/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromFeatureItems.featureKey, FEATURE_REDUCER_TOKEN),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }), //TODO: add devtools
  ],
  providers: [
    {
      provide: FEATURE_REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
