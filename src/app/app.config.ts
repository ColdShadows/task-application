import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './auth-interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from "@angular/material/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0(environment.auth),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideAnimations(),
    importProvidersFrom(MatNativeDateModule)
  ]
};