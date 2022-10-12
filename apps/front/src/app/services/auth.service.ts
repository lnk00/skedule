import { WebAuth } from 'auth0-js';
import { environment } from '../../environments/environment';

export const auth = new WebAuth({
  domain: environment.auth0_domain,
  clientID: environment.auth0_client_id,
  scope: environment.auth0_scope,
});

export const emailPasswordLogin = (email: string, password: string) => {
  auth.login(
    {
      email: email,
      password: password,
      realm: environment.auth0_realm,
      redirectUri: environment.auth0_login_redirect_uri,
      responseType: environment.auth0_login_response_type,
    },
    (err) => {
      console.log('ERROR: ', err);
    }
  );
};
