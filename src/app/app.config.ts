import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideAuth0({
      domain: 'dev-1ytqfri14i4zv6zm.us.auth0.com',
      clientId: '11flsUb6Xm93tHZOEhEoTCkxmLfYDFE6',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })]
};