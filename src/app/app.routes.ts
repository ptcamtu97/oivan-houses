import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'houses',
  },
  {
    path: 'houses',
    loadChildren: () =>
      import('./modules/houses/houses.routes').then((m) => m.HOUSES_ROUTES),
    data: {
      breadcrumb: 'House list',
    },
  },
];
