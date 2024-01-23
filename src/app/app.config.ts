import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { HousesFace, LoginFace } from './store/fades';
import {
  HousesService,
  LoginService,
  TokenInterceptorService,
} from './services';
import { provideAnimations } from '@angular/platform-browser/animations';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HousesEffect, LoginEffect } from './store/effects';

const SERVICES = [LoginService, HousesService, LoginFace, HousesFace];
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([HttpClientModule, BrowserAnimationsModule]),

    provideAnimations(),

    // store
    provideStore(reducers),
    provideEffects([LoginEffect, HousesEffect]),
    provideStoreDevtools(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    ...SERVICES,
  ],
};
