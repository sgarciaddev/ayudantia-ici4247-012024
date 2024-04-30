import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';

const InicioTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large' color={'primary'}>
              Inicio
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Inicio' />
      </IonContent>
    </IonPage>
  );
};

export default InicioTab;
