import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { logoIonic } from 'ionicons/icons';

import AppSeparador from '@/components/misc/AppSeparador';
import RecomendacionesObras from '@/components/home/RecomendacionesObras';
import ResenasRecientes from '@/components/home/ResenasRecientes';

const InicioTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>
            <IonIcon icon={logoIonic} /> CriticApp
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>
              <IonIcon icon={logoIonic} /> CriticApp
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <RecomendacionesObras />
        <AppSeparador />
        <ResenasRecientes />
      </IonContent>
    </IonPage>
  );
};

export default InicioTab;
