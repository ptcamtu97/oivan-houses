import { createReducer, on } from '@ngrx/store';
import { LoginError } from '../../shared/interfaces';
import { LoginAction } from '../actions';

export interface LoginState {
  isLoading: boolean;
  errors: LoginError[];
  token: string;
}
export const initialState: LoginState = {
  isLoading: false,
  errors: [],
  token: '',
};

export const reducer = createReducer(
  initialState,
  on(LoginAction.login, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(LoginAction.loginSuccess, (state, { token }) => ({
    ...state,
    isLoading: false,
    token,
  })),
  on(LoginAction.loginFail, (state, { errors }) => ({
    ...state,
    isLoading: false,
    errors,
  })),
  on(LoginAction.logout, (state) => {
    sessionStorage.clear();
    return {
      ...state,
      token: '',
    };
  }),
  on(LoginAction.initToken, (state) => ({
    ...state,
    token: sessionStorage.getItem('token') || '',
  }))
);
