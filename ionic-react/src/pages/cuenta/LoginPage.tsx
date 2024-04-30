import {
  IonButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRow,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

interface LoginPageProps {
  signUpPage: () => void;
  login: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ signUpPage, login }: LoginPageProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonRouterLink routerLink='/app/inicio' routerDirection='back'>
              <IonIcon icon={arrowBack} size='large' />
            </IonRouterLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonGrid className='ion-padding'>
          <IonRow>
            <IonCol size='12'>
              <IonCardTitle>Inicio de sesión</IonCardTitle>
            </IonCol>
          </IonRow>

          <IonRow className='ion-margin-top ion-padding-top'>
            <IonCol size='12'>
              <div>
                <IonLabel>Nombre de usuario</IonLabel>
                <IonInput type='text' />
              </div>
              <div>
                <IonLabel>Contraseña</IonLabel>
                <IonInput type='password' />
              </div>
              <IonButton className='ion-margin-top' color={'light'} expand='block' onClick={login}>
                Iniciar sesión
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-text-center ion-justify-content-center'>
            <IonCol size='12'>
              <p>
                ¿No tienes una cuenta?
                <IonText color={'primary'} onClick={signUpPage}>
                  {' '}
                  regístrate! &rarr;
                </IonText>
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
