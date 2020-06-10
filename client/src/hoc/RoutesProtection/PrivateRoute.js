import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../../utils/auth';

const PrivateRoute = ({component: Component, ...props}) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!auth.isLogin()) {
      setIsLogged(false)
      setIsInitialized(true);
    } else {
      setIsLogged(true)
      setIsInitialized(true);
    }
  });

  if (!isInitialized) {
    return null;
  }

  if (!isLogged) {
    return <Redirect to="/" />
  }

  return (<Component {...props} />)
}

export default PrivateRoute;

/****** This slightly works  ******/
// const PrivateRoute = ({ component: Component, ...rest }) => {
//   // const user = JSON.parse(localStorage.getItem("token"))
//   return (
//     // Show the component only when the user is logged in
//     // Otherwise, redirect the user to login page
//     <Route {...rest} render={props => (
//       auth.isLogin() ? <Component {...props} /> : <Redirect to="/" push={true} />
//     )} />
//   );
// };
