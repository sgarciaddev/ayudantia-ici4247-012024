import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { Redirect, Route } from 'react-router';
import { AppRoute } from '.';

import { heartOutline, home, pencil, personOutline } from 'ionicons/icons';

import InicioTab from '@/pages/tabs/InicioTab';
import MeGustaTab from '@/pages/tabs/MeGustaTab';
import MiCuentaTab from '@/pages/tabs/MiCuentaTab';
import NuevaResenaTab from '@/pages/tabs/NuevaResenaTab';

const sesionIniciada = false;

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
    path: '/app/nueva-resena',
    component: <NuevaResenaTab />,
    exact: true,
  },
  {
    path: '/app/me-gusta',
    component: <MeGustaTab />,
  },
  {
    path: '/app/mi-cuenta',
    component: <MiCuentaTab />,
    exact: true,
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
    tab: 'nueva-resena',
    href: '/app/nueva-resena',
    icon: pencil,
    label: 'Nueva reseña',
  },
  {
    tab: 'me-gusta',
    href: '/app/me-gusta',
    icon: heartOutline,
    label: 'Me gusta',
  },
  {
    tab: 'mi-cuenta',
    href: '/app/mi-cuenta',
    icon: personOutline,
    label: 'Mi cuenta',
  },
];

export const TabsRouter: React.FC = () => (
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
