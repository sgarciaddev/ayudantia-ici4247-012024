import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import { home, pencil, heartOutline, personOutline } from 'ionicons/icons';

interface TabsLayoutProps {
  children: React.ReactNode;
}

const TabsLayout: React.FC<TabsLayoutProps> = ({ children }) => (
  <IonTabs>
    {children}
    <IonTabBar slot='bottom'>
      <IonTabButton tab='tab1' href='/inicio'>
        <IonIcon aria-hidden='true' icon={home} />
        <IonLabel>Inicio</IonLabel>
      </IonTabButton>
      <IonTabButton tab='nueva-resena' href='/nueva-resena'>
        <IonIcon aria-hidden='true' icon={pencil} />
        <IonLabel>Nueva reseña</IonLabel>
      </IonTabButton>
      <IonTabButton tab='me-gusta' href='/me-gusta'>
        <IonIcon aria-hidden='true' icon={heartOutline} />
        <IonLabel>Me gusta</IonLabel>
      </IonTabButton>
      <IonTabButton tab='mi-cuenta' href='/mi-cuenta'>
        <IonIcon aria-hidden='true' icon={personOutline} />
        <IonLabel>Mi cuenta</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default TabsLayout;
