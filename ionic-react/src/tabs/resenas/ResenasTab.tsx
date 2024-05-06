import { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { addOutline } from 'ionicons/icons';

import ResenasRecientes from './lists/ResenasRecientes';
import ResenasRanking from './lists/ResenasRanking';
import ResenasFavoritas from './lists/ResenasFavoritas';

const resenasLists = {
  recientes: {
    label: 'Recientes',
    component: <ResenasRecientes />,
  },
  ranking: {
    label: 'Ranking',
    component: <ResenasRanking />,
  },
  favoritas: {
    label: 'Favoritas',
    component: <ResenasFavoritas />,
  },
};

interface ResenasTabProps {}

const ResenasTab: React.FC<ResenasTabProps> = ({}: ResenasTabProps) => {
  const [listSelected, setListSelected] = useState<keyof typeof resenasLists>('recientes');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'></IonButtons>
          <IonTitle>Reseñas</IonTitle>
          <IonButtons slot='end'>
            <IonButton>
              <IonRouterLink routerLink='/app/resenas/agregar'>
                <IonIcon className='h-7 w-7' icon={addOutline} />
              </IonRouterLink>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSegment
            value={listSelected}
            onIonChange={(e) => setListSelected(e.target.value as keyof typeof resenasLists)}
          >
            {Object.keys(resenasLists).map((key) => (
              <IonSegmentButton key={key} value={key}>
                <IonLabel>{resenasLists[key as keyof typeof resenasLists].label}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>{resenasLists[listSelected].component}</IonContent>
    </IonPage>
  );
};

export default ResenasTab;
