import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../reducers/login.reducer';

const loginFeatureSelector = createFeatureSelector<LoginState>('login');

export const isLoading = createSelector(
  loginFeatureSelector,
  (state) => state.isLoading
);

export const errors = createSelector(loginFeatureSelector, (state) => {
  return state.errors;
});

export const loginResult = createSelector(
  loginFeatureSelector,
  (state) => state.token
);
