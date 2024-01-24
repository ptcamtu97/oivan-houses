import { createAction, props } from '@ngrx/store';
import {
  AccordionItem,
  HouseListInfo,
  KeysToCamelCase,
} from '../../shared/interfaces';

export const getHouseModelList = createAction('[Houses] Get House Model List');

export const getHouseModelListSuccess = createAction(
  '[Houses] Get House Model List Success',
  props<{ houseModelList: AccordionItem[] }>()
);

export const getHouseModelListFail = createAction(
  '[Houses] Get House Model List Fail'
);

export const getHouseList = createAction('[Houses] Get House List');

export const getHouseListSuccess = createAction(
  '[Houses] Get House List Success',
  props<{ houseList: HouseListInfo[] }>()
);

export const getHouseListFail = createAction('[Houses] Get House List Fail');

export const createHouse = createAction(
  '[Houses] Create House',
  props<{ payload: any }>()
);

export const createHouseSuccess = createAction('[Houses] Create House Success');

export const createHouseFail = createAction('[Houses] Create House Fail');

export const updateHouse = createAction(
  '[Houses] Update House',
  props<{ payload: KeysToCamelCase<HouseListInfo> }>()
);

export const updateHouseSuccess = createAction('[Houses] Update House Success');

export const updateHouseFail = createAction('[Houses] Update House Fail');
