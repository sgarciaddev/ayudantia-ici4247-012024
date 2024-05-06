import { IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';

import AgregarObra from '@/tabs/obras/pages/AgregarObra';
import ObraPage from '@/tabs/obras/pages/ObraPage';
import ObrasTab from '@/tabs/obras/ObrasTab';

const ObrasRouter: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path='/app/obras' component={ObrasTab} />
        <Route exact path='/app/obras/agregar' component={AgregarObra} />
        <Route path='/app/obras/desc/:id' component={ObraPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default ObrasRouter;
