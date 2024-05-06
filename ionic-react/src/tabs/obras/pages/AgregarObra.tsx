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

const AgregarObra: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/app/obras' text='Atras' />
          </IonButtons>
          <IonTitle>Agregar obra</IonTitle>
          <IonButtons slot='end'>
            <IonButton></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <p>Página para agregar una nueva obra</p>
      </IonContent>
    </IonPage>
  );
};

export default AgregarObra;
