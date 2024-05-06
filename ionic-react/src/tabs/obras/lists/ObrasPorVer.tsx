import ObraCard from '@/components/obras/ObraCard';

const ObrasPorVer: React.FC = () => {
  return (
    <div className='my-6 w-full px-2'>
      <h3 className='text-2xl font-medium text-zinc-800 dark:text-zinc-100'>Obras por ver</h3>
      <div className='mt-8 flex h-full w-full flex-col'>
        <div className='group mt-6 h-56 w-full'>
          <ObraCard
            id={3}
            title='One punch man'
            type='anime'
            image='https://images.thedirect.com/media/article_full/one-punch.jpg'
            variant='violet'
          />
        </div>
        <div className='group mt-6 h-56 w-full'>
          <ObraCard
            id={4}
            title='Dark'
            type='serie'
            image='https://images.theconversation.com/files/347289/original/file-20200714-139702-vkn6aw.png?ixlib=rb-4.1.0&rect=0%2C0%2C1278%2C638&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip'
            variant='gray'
          />
        </div>
        <div className='group mt-6 h-56 w-full'>
          <ObraCard
            id={5}
            title='Oppenheimer'
            type='pelicula'
            image='https://www.sebastianzavala.com/wp-content/uploads/2023/07/oppenheimer-1.jpeg'
            variant='amber'
          />
        </div>
      </div>
    </div>
  );
};

export default ObrasPorVer;
