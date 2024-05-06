import ResenaIndividual from '@/components/resenas/ResenaIndividual';
import { IonItem, IonList } from '@ionic/react';

const ResenasRecientes: React.FC = () => {
  return (
    <div className='my-6 w-full'>
      <h3 className='text-2xl font-medium text-zinc-800 dark:text-zinc-100'>Reseñas recientes</h3>
      <div className='flex h-full w-full flex-col'>
        <div className='group mt-6 h-56 w-full'>
          <IonList>
            <IonItem className='mt-4'>
              <ResenaIndividual
                rating={3.0}
                username='daniela.quinones'
                userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/10/122139330_1301305493538238_2057443899688640217_n-1.jpg'
                obra={{ title: 'Obra de ejemplo', id: 1 }}
                review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              />
            </IonItem>
            <IonItem className='mt-4'>
              <ResenaIndividual
                rating={1.5}
                username='guillermo.cabrera'
                userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/GuillermoCabreraG.jpg'
                obra={{ title: 'Obra de ejemplo', id: 1 }}
                review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              />
            </IonItem>
          </IonList>
        </div>
      </div>
    </div>
  );
};

export default ResenasRecientes;
