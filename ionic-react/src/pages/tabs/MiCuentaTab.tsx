import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { useState } from 'react';
import SignupPage from '../cuenta/SignupPage';
import LoginPage from '../cuenta/LoginPage';

const MiCuentaTabContent: React.FC<{ setLoggedOut: () => void }> = ({ setLoggedOut }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Mi cuenta</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Mi cuenta'>
          <IonButton className='ion-margin-top' color={'danger'} onClick={setLoggedOut}>
            Cerrar sesión
          </IonButton>
        </ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

const MiCuentaTab: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const setSigningUp = (val: boolean = true) => {
    setIsSigningUp(val);
  };

  const setLoggedIn = (val: boolean = true) => {
    setIsLogged(val);
  };

  return !isSigningUp && !isLogged ? (
    <LoginPage signUpPage={setSigningUp} login={() => setLoggedIn(true)} />
  ) : isLogged ? (
    <MiCuentaTabContent setLoggedOut={() => setLoggedIn(false)} />
  ) : (
    <SignupPage back={() => setSigningUp(false)} />
  );
};

export default MiCuentaTab;
