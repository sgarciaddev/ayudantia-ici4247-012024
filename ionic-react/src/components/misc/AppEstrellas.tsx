import { IonIcon } from '@ionic/react';
import { star, starHalf, starOutline } from 'ionicons/icons';

interface AppEstrellasProps {
  rating: number;
}

const AppEstrellas: React.FC<AppEstrellasProps> = ({ rating }) => {
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

export default AppEstrellas;
