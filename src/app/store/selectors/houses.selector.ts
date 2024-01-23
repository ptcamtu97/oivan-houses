import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHousesModel from '../reducers';
import { HousesState } from '../reducers/houses.reducer';

const houseModelFeatureSelector = createFeatureSelector<HousesState>('houses');

export const isLoading = createSelector(
  houseModelFeatureSelector,
  (state) => state.isLoading
);

export const houseModelList = createSelector(
  houseModelFeatureSelector,
  (state) => state.houseModelList
);

export const houseList = createSelector(
  houseModelFeatureSelector,
  (state) => state.houseList
);
