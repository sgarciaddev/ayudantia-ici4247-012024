import { IonIcon } from '@ionic/react';
import { star, starHalf, starOutline, heartOutline, sparklesOutline } from 'ionicons/icons';

interface HomeResenaProps {
  username: string;
  userImg: string;
  rating: number;
  review: string;
}

const getStars: (rating: number) => JSX.Element = (rating) => {
  const entireStars = Math.floor(rating);
  const hasHalfStar = (rating - entireStars) * 10 > 3;
  const emptyStars = 5 - entireStars - (hasHalfStar ? 1 : 0);
  return (
    <div className='flex text-amber-600 dark:text-amber-400'>
      {Array.from({ length: entireStars }, (_, i) => (
        <IonIcon key={i} icon={star} className='h-5 w-5' />
      ))}
      {hasHalfStar && <IonIcon icon={starHalf} className='h-5 w-5' />}
      {Array.from({ length: emptyStars }, (_, i) => (
        <IonIcon key={i} icon={starOutline} className='h-5 w-5' />
      ))}
    </div>
  );
};

const HomeResena: React.FC<HomeResenaProps> = ({ username, userImg, rating, review }: HomeResenaProps) => {
  return (
    <div className='flex h-full w-full flex-col px-2 py-1'>
      <div className='flex w-full flex-shrink-0 flex-col'>
        <div className='flex h-12 w-full items-center gap-4'>
          <img className='h-10 w-10 rounded-full' src={userImg} alt='' />
          <div className='flex h-full flex-col justify-center'>
            <p className='font-medium text-zinc-700 dark:text-zinc-300'>{username}</p>
            {getStars(rating)}
          </div>
        </div>
        <h5 className='mt-3 text-emerald-600 dark:text-emerald-400'>
          <span className='font-bold'>Obra reseñada:</span> Obra de ejemplo
        </h5>
        <div className='prose'>
          <p className='py-3 text-zinc-600 dark:text-zinc-400'>{review}</p>
        </div>
        <div className='mx-4 grid grid-cols-2'>
          <div className='inline-flex items-center justify-center gap-2 border-l border-r border-zinc-300 border-opacity-50 px-2 py-1 text-sm font-medium text-red-600 dark:border-zinc-700 dark:text-red-300'>
            <IonIcon icon={heartOutline} />
            Me gusta
          </div>
          <div className='inline-flex items-center justify-center gap-2 border-l border-r border-zinc-300 border-opacity-50 px-2 py-1 text-sm font-medium text-emerald-600 dark:border-zinc-700 dark:text-emerald-300'>
            <IonIcon icon={sparklesOutline} />
            Detalles de la obra
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeResena;
