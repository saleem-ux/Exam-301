import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain='saleem-ux.us.auth0.com'
    clientId='wnbEo2RJ79YQ4RLjDlpCJRPf3ULCZgIX'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);