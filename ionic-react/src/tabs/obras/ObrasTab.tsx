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

import ObrasRecomendadas from './lists/ObrasRecomendadas';
import ObrasTendencias from './lists/ObrasTendencias';
import ObrasPorVer from './lists/ObrasPorVer';

const obrasLists = {
  recomendadas: {
    label: 'Recomendadas',
    component: <ObrasRecomendadas />,
  },
  tendencias: {
    label: 'Tendencias',
    component: <ObrasTendencias />,
  },
  'por-ver': {
    label: 'Por ver',
    component: <ObrasPorVer />,
  },
};

interface ObrasTabProps {}

const ObrasTab: React.FC<ObrasTabProps> = ({}: ObrasTabProps) => {
  const [listSelected, setListSelected] = useState<keyof typeof obrasLists>('recomendadas');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'></IonButtons>
          <IonTitle>Obras</IonTitle>
          <IonButtons slot='end'>
            <IonButton>
              <IonRouterLink routerLink='/app/obras/agregar'>
                <IonIcon className='h-7 w-7' icon={addOutline} />
              </IonRouterLink>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSegment
            value={listSelected}
            onIonChange={(e) => setListSelected(e.target.value as keyof typeof obrasLists)}
          >
            {Object.keys(obrasLists).map((key) => (
              <IonSegmentButton key={key} value={key}>
                <IonLabel>{obrasLists[key as keyof typeof obrasLists].label}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>{obrasLists[listSelected].component}</IonContent>
    </IonPage>
  );
};

export default ObrasTab;
