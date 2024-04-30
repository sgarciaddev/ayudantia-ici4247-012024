import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import { AppRoute } from '.';

import LoginPage from '@/pages/cuenta/LoginPage';
import SignupPage from '@/pages/cuenta/SignupPage';

const accountRoutes: AppRoute[] = [
  {
    path: '/cuenta/login',
    component: <LoginPage />,
    exact: true,
  },
  {
    path: '/cuenta/signup',
    component: <SignupPage />,
    exact: true,
  },
];

export const AccountRouter: React.FC = () => (
  <IonRouterOutlet>
    {accountRoutes.map((route) => (
      <Route key={route.path} path={route.path} exact={route.exact}>
        {route.component}
      </Route>
    ))}
  </IonRouterOutlet>
);
