import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginAction } from '../actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LoginService, NotificationsService } from '../../services';

@Injectable()
export class LoginEffect {
  #actions = inject(Actions);
  #loginService = inject(LoginService);
  #notificationsService = inject(NotificationsService);

  login$ = createEffect(() =>
    this.#actions.pipe(
      ofType(LoginAction.login),
      switchMap(({ username, password }) =>
        this.#loginService.login(username, password).pipe(
          map((response) => {
            if (response?.data) {
              this.#notificationsService.notification('Login Successfully');
              sessionStorage.setItem(
                'token',
                response?.data?.attributes?.token
              );
              return LoginAction.loginSuccess({
                token: response?.data?.attributes?.token,
              });
            } else {
              this.#notificationsService.notification('Login Fail');
              return LoginAction.loginFail({ errors: response?.errors || [] });
            }
          }),
          catchError((errors) => {
            const msg = errors?.error?.errors?.[0]?.detail;
            this.#notificationsService.notification(msg);
            return of(LoginAction.loginFail({ errors }));
          })
        )
      )
    )
  );
}
