import { WebAuth } from 'auth0-js';
import { environment } from '../../environments/environment';

export const auth = new WebAuth({
  domain: environment.auth0_domain,
  clientID: environment.auth0_client_id,
  scope: environment.auth0_scope,
});
