import * as fromLogin from './login.reducer';
import * as fromHousesModel from './houses.reducer';

export interface State {
  houses: fromHousesModel.HousesState;
  login: fromLogin.LoginState;
}

export const reducers = {
  houses: fromHousesModel.reducer,
  login: fromLogin.reducer,
};
