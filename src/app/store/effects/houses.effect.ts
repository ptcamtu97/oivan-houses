import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HousesAction } from '../actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HousesService, NotificationsService } from '../../services';

@Injectable()
export class HousesEffect {
  #actions = inject(Actions);
  #housesService = inject(HousesService);
  #notificationsService = inject(NotificationsService);

  getHouseModelList$ = createEffect(() =>
    this.#actions.pipe(
      ofType(HousesAction.getHouseModelList),
      switchMap(() =>
        this.#housesService.houseModelList().pipe(
          map((response) => {
            if (response) {
              return HousesAction.getHouseModelListSuccess({
                houseModelList: response?.data?.map((item) => ({
                  title: item.attributes?.model,
                  id: item.id,
                  content: item.attributes,
                })),
              });
            } else {
              this.#notificationsService.notification('Endpoint error');
              return HousesAction.getHouseModelListFail();
            }
          }),
          catchError((errors) => {
            const msg = errors?.error?.errors?.[0]?.detail;
            this.#notificationsService.notification(msg);
            return of(HousesAction.getHouseModelListFail());
          })
        )
      )
    )
  );

  getHouseList$ = createEffect(() =>
    this.#actions.pipe(
      ofType(HousesAction.getHouseList),
      switchMap(() =>
        this.#housesService.houseList().pipe(
          map((response) => {
            if (response) {
              return HousesAction.getHouseListSuccess({
                houseList: response?.data?.map((item) => ({
                  ...item.attributes,
                  id: item.id,
                  type: item.type,
                })),
              });
            } else {
              this.#notificationsService.notification('Endpoint error');
              return HousesAction.getHouseListFail();
            }
          }),
          catchError((errors) => {
            const msg = errors?.error?.errors?.[0]?.detail;
            this.#notificationsService.notification(msg);
            return of(HousesAction.getHouseListFail());
          })
        )
      )
    )
  );

  createHouse$ = createEffect(() =>
    this.#actions.pipe(
      ofType(HousesAction.createHouse),
      switchMap(({ payload }) =>
        this.#housesService.createHouse(payload).pipe(
          map((response) => {
            if (response) {
              this.#notificationsService.notification(
                'Create House Successfully'
              );
              return HousesAction.createHouseSuccess();
            } else {
              this.#notificationsService.notification('Endpoint error');
              return HousesAction.createHouseFail();
            }
          }),
          catchError((errors) => {
            const msg = errors?.error?.errors?.[0]?.detail;
            this.#notificationsService.notification(msg);
            return of(HousesAction.createHouseFail());
          })
        )
      )
    )
  );

  updateHouse$ = createEffect(() =>
    this.#actions.pipe(
      ofType(HousesAction.updateHouse),
      switchMap(({ payload }) =>
        this.#housesService.updateHouse(payload).pipe(
          map((response) => {
            if (response) {
              this.#notificationsService.notification(
                'Update House Successfully'
              );
              return HousesAction.updateHouseSuccess();
            } else {
              this.#notificationsService.notification('Endpoint error');
              return HousesAction.updateHouseFail();
            }
          }),
          catchError((errors) => {
            const msg = errors?.error?.errors?.[0]?.detail;
            this.#notificationsService.notification(msg);
            return of(HousesAction.updateHouseFail());
          })
        )
      )
    )
  );
}
