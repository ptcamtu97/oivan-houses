import { Routes } from '@angular/router';
import { HousesComponent } from './houses.component';
import {
  HouseDetailContainerComponent,
  HouseModelContainerComponent,
} from './containers';

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
        path: ':id',
        component: HouseDetailContainerComponent,
      },
    ],
  },
];
