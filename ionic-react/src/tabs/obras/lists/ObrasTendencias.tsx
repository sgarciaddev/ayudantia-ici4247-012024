import ObraCard from '@/components/obras/ObraCard';

const ObrasTendencias: React.FC = () => {
  return (
    <div className='my-6 w-full px-2'>
      <h3 className='text-2xl font-medium text-zinc-800 dark:text-zinc-100'>Obras en tendencia</h3>
      <div className='mt-8 flex h-full w-full flex-col'>
        <div className='group mt-6 h-56 w-full'>
          <ObraCard
            id={6}
            title='Vinland saga'
            type='anime'
            image='https://assets.mubicdn.net/images/film/253853/image-w1280.jpg?1578631914'
            variant='zinc'
          />
        </div>
        <div className='group mt-6 h-56 w-full'>
          <ObraCard
            id={7}
            title='Rick & Morty'
            type='serie'
            image='https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/10/09/6523c754a7788.png'
            variant='cyan'
          />
        </div>
        <div className='group mt-6 h-56 w-full'>
          <ObraCard
            id={3}
            title='One punch man'
            type='anime'
            image='https://images.thedirect.com/media/article_full/one-punch.jpg'
            variant='violet'
          />
        </div>
      </div>
    </div>
  );
};

export default ObrasTendencias;
