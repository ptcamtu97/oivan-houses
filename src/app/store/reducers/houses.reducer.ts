import { createReducer, on } from '@ngrx/store';
import {
  AccordionItem,
  HouseListInfo,
  HouseModelInfo,
} from '../../shared/interfaces';
import { HousesAction } from '../actions';

export interface HousesState {
  isLoading: boolean;
  houseModelList: AccordionItem[];
  houseList: HouseListInfo[];
}
export const initialState: HousesState = {
  isLoading: false,
  houseModelList: [],
  houseList: [],
};

export const reducer = createReducer(
  initialState,
  on(HousesAction.getHouseModelList, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(HousesAction.getHouseModelListSuccess, (state, { houseModelList }) => {
    return {
      ...state,
      isLoading: false,
      houseModelList,
    };
  }),
  on(HousesAction.getHouseModelList, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(HousesAction.getHouseList, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(HousesAction.getHouseListSuccess, (state, { houseList }) => {
    return {
      ...state,
      isLoading: false,
      houseList,
    };
  }),
  on(HousesAction.getHouseList, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(HousesAction.createHouse, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(HousesAction.createHouseSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(HousesAction.createHouseFail, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(HousesAction.updateHouse, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(HousesAction.updateHouseSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(HousesAction.updateHouseFail, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  })
);
