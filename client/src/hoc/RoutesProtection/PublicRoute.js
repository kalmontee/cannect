import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import auth from '../../utils/auth';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
      auth.isLogin() && restricted ? <Component {...props} /> : <Redirect to="/" />
    )} />
  );
};

export default PublicRoute;