import { Injectable } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {
  /*
   *@description
   *Se inyecta el servicio de ShowCaseService
   *Se crea un effect para cada accion que se desea ejecutar
   *@param actions$
   *@returns void
   */
  constructor(
    private actions$: Actions,
    private itemsService: ShowCaseService
  ) {}

  /*
   *@description
   *Se crea un effect con la accion de carga de datos
   * @param loadItems
   */
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Items] Load Items'),
      mergeMap(() =>
        this.itemsService.getItems().pipe(
          map((items) => ({
            type: '[Items] Load Items Success',
            items,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
