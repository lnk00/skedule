/* eslint-disable @typescript-eslint/no-non-null-assertion */
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

interface IEnvironment {
  production: boolean;
  auth0_client_id: string;
  auth0_domain: string;
  auth0_scope: string;
  auth0_realm: string;
  auth0_login_response_type: string;
  auth0_login_redirect_uri: string;
  auth0_logout_redirect_uri: string;
}

export const environment: IEnvironment = {
  production: false,
  auth0_client_id: process.env['NX_AUTH0_CLIENT_ID']!,
  auth0_domain: process.env['NX_AUTH0_DOMAIN']!,
  auth0_scope: process.env['NX_AUTH0_SCOPE']!,
  auth0_realm: process.env['NX_AUTH0_REALM']!,
  auth0_login_response_type: process.env['NX_AUTH0_LOGIN_RESPONSE_TYPE']!,
  auth0_login_redirect_uri: process.env['NX_AUTH0_LOGIN_REDIRECT_URI']!,
  auth0_logout_redirect_uri: process.env['NX_AUTH0_LOGOUT_REDIRECT_URI']!,
};
