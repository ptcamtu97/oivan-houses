import { Routes } from '@angular/router';
import { HousesComponent } from './houses.component';
import {
  HouseDetailContainerComponent,
  HouseModelContainerComponent,
} from './containers';
import { AuthGuardService } from '../../services';

export const HOUSES_ROUTES: Routes = [
  {
    path: '',
    component: HousesComponent,
    providers: [],
    children: [
      {
        path: '',
        component: HouseModelContainerComponent,
      },
      {
        path: 'create-house',
        component: HouseDetailContainerComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Create house',
        },
      },
      {
        path: ':id',
        component: HouseDetailContainerComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: '',
        },
      },
    ],
  },
];
