const CALLBACK_URL = process.env.REACT_APP_CALL_BACK_URL || 'http://localhost:8080/grossmont/callback';

export const AUTH_CONFIG = {
  domain: 'exploreit.auth0.com',
  clientId: 'dOCYrqlfYFiXdnyrHNex-Lk4QyvO_CSr',
  callbackUrl: CALLBACK_URL
}
