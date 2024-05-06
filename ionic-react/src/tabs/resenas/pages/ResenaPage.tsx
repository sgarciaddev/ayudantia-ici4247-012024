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

const ResenaPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/app/resenas' text='Atras' />
          </IonButtons>
          <IonTitle>Reseña page</IonTitle>
          <IonButtons slot='end'>
            <IonButton></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <p>Página para cada reseña individual</p>
      </IonContent>
    </IonPage>
  );
};

export default ResenaPage;
