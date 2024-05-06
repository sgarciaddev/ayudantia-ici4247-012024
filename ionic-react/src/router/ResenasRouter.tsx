import { IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';

import ResenasTab from '@/tabs/resenas/ResenasTab';
import AgregarResena from '@/tabs/resenas/pages/AgregarResena';
import ResenaPage from '@/tabs/resenas/pages/ResenaPage';

const ResenasRouter: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path='/app/resenas' component={ResenasTab} />
        <Route exact path='/app/resenas/agregar' component={AgregarResena} />
        <Route path='/app/resenas/desc/:id' component={ResenaPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default ResenasRouter;
