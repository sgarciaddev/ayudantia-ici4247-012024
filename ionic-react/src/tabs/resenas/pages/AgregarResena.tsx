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

const AgregarResena: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/app/obras' text='Atras' />
          </IonButtons>
          <IonTitle>Agregar reseña</IonTitle>
          <IonButtons slot='end'>
            <IonButton></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <p>Página para agregar una nueva reseña</p>
      </IonContent>
    </IonPage>
  );
};

export default AgregarResena;
