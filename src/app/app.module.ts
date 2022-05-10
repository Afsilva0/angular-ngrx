import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    /*
     *StoreModule.forRoot se utiliza para registrar los reducers de la aplicación
     */
    StoreModule.forRoot({}),

    /*
     *EffectsModule.forRoot se utiliza para registrar los effects en el store
     */
    EffectsModule.forRoot([]),

    /*
     *StoreDevtoolsModule.instrument se utiliza para registrar el devtool de la aplicación
     */
    StoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
