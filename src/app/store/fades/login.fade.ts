import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from '../actions';
import { LoginSelector } from '../selectors';

@Injectable()
export class LoginFace {
  store = inject(Store);

  isLoading$ = this.store.select(LoginSelector.isLoading);
  errors$ = this.store.select(LoginSelector.errors);
  loginResult$ = this.store.select(LoginSelector.loginResult);

  login(username: string, password: string): void {
    this.store.dispatch(LoginAction.login({ username, password }));
  }

  logout(): void {
    this.store.dispatch(LoginAction.logout());
  }

  initToken(): void {
    this.store.dispatch(LoginAction.initToken());
  }
}
