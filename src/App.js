import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Loader from './Components/Loader/Loader';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/homePage/HomePage' /* webpackChunkName: "Home-Page" */),
);

const ContactsPage = lazy(() =>
  import(
    './pages/contactsPage/ContactsPage' /* webpackChunkName: "Contacts-Page" */
  ),
);

const RegisterPage = lazy(() =>
  import(
    './pages/registerPage/RegisterPage' /* webpackChunkName: "Register-Page" */
  ),
);

const LoginPage = lazy(() =>
  import('./pages/loginPage/LoginPage' /* webpackChunkName: "Login-Page" */),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={routes.home}>
            <HomePage />
          </PublicRoute>

          <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
            <ContactsPage />
          </PrivateRoute>

          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
          >
            <RegisterPage />
          </PublicRoute>

          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
          >
            <LoginPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
