import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface ObrasPageProps {}

const ObrasPage: React.FC<ObrasPageProps> = ({}: ObrasPageProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' text='' />
          </IonButtons>
          <IonTitle>Obras reseñadas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonTitle>Listado de obras reseñadas</IonTitle>
      </IonContent>
      <IonHeader>
        <IonBackButton />
      </IonHeader>
    </IonPage>
  );
};

export default ObrasPage;
