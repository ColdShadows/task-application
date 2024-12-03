import config from '../auth_config.json';

const { domain, clientId, apiUri, appUri, errorPath } = config as {
  domain: string;
  clientId: string;
  // authorizationParams: {
  //   audience: string;
  // },
  apiUri: string;
  appUri: string;
  errorPath: string;
};


export const environment = {
    production: false,
    appUri: appUri,
    apiUri: apiUri,
    auth: {
      domain,
      clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-1ytqfri14i4zv6zm.us.auth0.com/api/v2/'
      },
      errorPath,
    },
};
