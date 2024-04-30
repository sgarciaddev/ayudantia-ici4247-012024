import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

interface ResenasPageProps {}

const ResenasPage: React.FC<ResenasPageProps> = ({}: ResenasPageProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' text='' />
          </IonButtons>
          <IonTitle>Reseñas recientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonTitle>Listado de reseñas recientes</IonTitle>
      </IonContent>
      <IonHeader>
        <IonBackButton />
      </IonHeader>
    </IonPage>
  );
};

export default ResenasPage;
