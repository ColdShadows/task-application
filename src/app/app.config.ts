import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './auth-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideAuth0(environment.auth),
    //  provideAuth0({
    //   // The domain and clientId were configured in the previous chapter
    //   domain: 'dev-1ytqfri14i4zv6zm.us.auth0.com',
    //   clientId: '11flsUb6Xm93tHZOEhEoTCkxmLfYDFE6',
    
    //   authorizationParams: {
    //     redirect_uri: window.location.origin,
        
    //     // Request this audience at user authentication time
    //     audience: 'https://dev-1ytqfri14i4zv6zm.us.auth0.com/api/v2/',
    
    //     // Request this scope at user authentication time
    //     scope: 'read:current_user',
    //   },
    
    //   // Specify configuration for the interceptor              
    //   httpInterceptor: {
    //     allowedList: [
    //       {
    //         // Match any request that starts 'https://dev-1ytqfri14i4zv6zm.us.auth0.com/api/v2/' (note the asterisk)
    //         uri: 'https://dev-1ytqfri14i4zv6zm.us.auth0.com/api/v2/*',
    //         tokenOptions: {
    //           authorizationParams: {
    //             // The attached token should target this audience
    //             audience: 'https://dev-1ytqfri14i4zv6zm.us.auth0.com/api/v2/',
    
    //             // The attached token should have these scopes
    //             scope: 'read:current_user'
    //           }
    //         }
    //       }
    //     ]
    //   }
    // }),
  provideHttpClient(withInterceptors([AuthInterceptor])),
]
};