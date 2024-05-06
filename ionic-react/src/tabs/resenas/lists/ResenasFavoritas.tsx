import ResenaIndividual from '@/components/resenas/ResenaIndividual';
import { IonItem, IonList } from '@ionic/react';

const ResenasFavoritas: React.FC = () => {
  return (
    <div className='my-6 w-full'>
      <h3 className='text-2xl font-medium text-zinc-800 dark:text-zinc-100'>Reseñas favoritas</h3>
      <div className='flex h-full w-full flex-col'>
        <div className='group mt-6 h-56 w-full'>
          <IonList>
            <IonItem className='mt-4'>
              <ResenaIndividual
                rating={4.0}
                username='claudio.cubillos'
                userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/ClaudioCubillosF.jpg'
                obra={{ title: 'Obra de ejemplo', id: 1 }}
                review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              />
            </IonItem>
            <IonItem className='mt-4'>
              <ResenaIndividual
                rating={4.5}
                username='ricardo.soto'
                userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/RicardoSotoD-1.jpg'
                obra={{ title: 'Obra de ejemplo', id: 1 }}
                review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              />
            </IonItem>
            <IonItem className='mt-4'>
              <ResenaIndividual
                rating={3.5}
                username='ivan.mercado'
                userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/IvanMercadoB.jpg'
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

export default ResenasFavoritas;
