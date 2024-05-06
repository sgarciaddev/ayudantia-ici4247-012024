import { useState } from 'react';
import { IonIcon, IonRouterLink } from '@ionic/react';

import { heart, heartDislikeOutline, heartOutline, sparklesOutline } from 'ionicons/icons';

import AppEstrellas from '@/components/misc/AppEstrellas';

interface HomeResenaProps {
  username: string;
  userImg: string;
  rating: number;
  review: string;
  obra: { title: string; id: number };
}

const ResenaIndividual: React.FC<HomeResenaProps> = ({ username, userImg, rating, review, obra }: HomeResenaProps) => {
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className='flex h-full w-full flex-col px-2 py-1'>
      <div className='flex w-full flex-shrink-0 flex-col'>
        <div className='flex'>
          <div className='flex h-12 w-full items-center gap-4'>
            <img className='h-10 w-10 rounded-full' src={userImg} alt='' />
            <div className='flex h-full flex-col justify-center'>
              <p className='font-medium text-zinc-700 dark:text-zinc-300'>{username}</p>
              <AppEstrellas rating={rating} />
            </div>
          </div>
          {like && <IonIcon icon={heart} className='h-8 w-8 text-red-600 dark:text-red-300' />}
        </div>
        <h5 className='mt-3 text-emerald-600 dark:text-emerald-400'>
          <span className='font-bold'>Obra reseñada:</span> {obra.title}
        </h5>
        <div className='prose'>
          <p className='py-3 text-zinc-600 dark:text-zinc-400'>{review}</p>
        </div>
        <div className='mx-4 grid grid-cols-2'>
          <div
            className='inline-flex items-center justify-center gap-2 border-l border-r border-zinc-300 border-opacity-50 px-2 py-1 text-sm font-medium text-red-600 dark:border-zinc-700 dark:text-red-300'
            onClick={() => setLike((val) => !val)}
          >
            {like ? (
              <>
                <IonIcon icon={heartDislikeOutline} />
                Ya no me gusta
              </>
            ) : (
              <>
                <IonIcon icon={heartOutline} />
                Me gusta
              </>
            )}
          </div>
          <IonRouterLink routerLink={`/app/obras/desc/${obra.id}`} routerDirection='forward'>
            <div className='inline-flex items-center justify-center gap-2 border-l border-r border-zinc-300 border-opacity-50 px-2 py-1 text-sm font-medium text-emerald-600 dark:border-zinc-700 dark:text-emerald-300'>
              <IonIcon icon={sparklesOutline} />
              Detalles de la obra
            </div>
          </IonRouterLink>
        </div>
      </div>
    </div>
  );
};

export default ResenaIndividual;
