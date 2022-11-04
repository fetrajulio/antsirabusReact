/* eslint-disable import/extensions */
// import { useEffect } from 'react';
import { Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Reducers } from '../../../redux/reducers';

// eslint-disable-next-line camelcase
// const url_login = process.env.REACT_APP_LOGIN_URL;

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const user = useSelector<Reducers>((state) => state.logger);

/* useEffect(() => {
    if (!user) {
      window.location.assign(url_login);
    }
  }, []); */

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;