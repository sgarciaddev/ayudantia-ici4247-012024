import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const ObraPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/app/obras' text='Atras' />
          </IonButtons>
          <IonTitle>Obra page</IonTitle>
          <IonButtons slot='end'>
            <IonButton></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <p>Página para cada obra individual</p>
      </IonContent>
    </IonPage>
  );
};

export default ObraPage;
