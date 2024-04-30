import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';

const MeGustaTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Me gusta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Me gusta</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Me gusta' />
      </IonContent>
    </IonPage>
  );
};

export default MeGustaTab;
