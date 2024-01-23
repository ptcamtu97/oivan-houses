import { createAction, props } from '@ngrx/store';
import { LoginError } from '../../shared/interfaces';

export const login = createAction(
  '[Login] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: string }>()
);

export const loginFail = createAction(
  '[Login] Login Fail',
  props<{ errors: LoginError[] }>()
);

export const logout = createAction('[Login] Logout');

export const initToken = createAction('[Login] Init Token');
