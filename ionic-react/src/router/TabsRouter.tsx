import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { Redirect, Route } from 'react-router';

import { filmOutline, heartHalfOutline, home, personOutline } from 'ionicons/icons';

import InicioTab from '@/tabs/inicio/InicioTab';
import MiCuentaTab from '@/tabs/cuenta/MiCuentaTab';

import ObrasRouter from './ObrasRouter';
import ResenasRouter from './ResenasRouter';

interface AppRoute {
  path: string;
  component: JSX.Element;
  exact?: boolean;
}

interface TabsRouterTabButton {
  tab: string;
  href: string;
  icon: string;
  label: string;
}

const tabsRoutes: AppRoute[] = [
  {
    path: '/app/inicio',
    component: <InicioTab />,
    exact: true,
  },
  {
    path: '/app/resenas',
    component: <ResenasRouter />,
  },
  {
    path: '/app/obras',
    component: <ObrasRouter />,
  },
  {
    path: '/app/cuenta',
    component: <MiCuentaTab />,
  },
  {
    path: '/app',
    component: <Redirect to='/app/inicio' />,
    exact: true,
  },
];

const tabButtons: TabsRouterTabButton[] = [
  {
    tab: 'inicio',
    href: '/app/inicio',
    icon: home,
    label: 'Inicio',
  },
  {
    tab: 'resenas',
    href: '/app/resenas',
    icon: heartHalfOutline,
    label: 'Reseñas',
  },
  {
    tab: 'obras',
    href: '/app/obras',
    icon: filmOutline,
    label: 'Obras',
  },
  {
    tab: 'mi-cuenta',
    href: '/app/cuenta',
    icon: personOutline,
    label: 'Mi cuenta',
  },
];

const TabsRouter: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      {tabsRoutes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}
    </IonRouterOutlet>
    <IonTabBar slot='bottom'>
      {tabButtons.map((tabButton) => (
        <IonTabButton key={tabButton.tab} tab={tabButton.tab} href={tabButton.href}>
          <IonIcon aria-hidden='true' icon={tabButton.icon} />
          <IonLabel>{tabButton.label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  </IonTabs>
);

export default TabsRouter;
