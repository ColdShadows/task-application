import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { environment } from '../environments/environment';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject AuthService for use in the functional interceptor
  const auth = inject(AuthService);

  // Check if the request should have the token
  const shouldAttachToken = req.url.includes(environment.apiUri);

  if (!shouldAttachToken) {
    return next(req);
  }

  // Get the token and clone the request with the Authorization header
  return from(auth.getAccessTokenSilently()).pipe(
    switchMap((token) => {
      const tokenReq = req.clone({
        setHeaders: {
          "Authorization": `Bearer ${token}`,
        },
      });

      return next(tokenReq);
    })
  );
};