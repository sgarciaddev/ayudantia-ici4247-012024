import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';

const NuevaResenaTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nueva reseña</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Nueva reseña</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Nueva reseña' />
      </IonContent>
    </IonPage>
  );
};

export default NuevaResenaTab;
