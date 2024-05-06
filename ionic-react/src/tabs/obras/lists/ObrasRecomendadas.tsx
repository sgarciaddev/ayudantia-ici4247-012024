import ObraCard from '@/components/obras/ObraCard';

const ObrasRecomendadas: React.FC = () => {
  return (
    <div className='my-6 w-full px-2'>
      <h3 className='text-2xl font-medium text-zinc-800 dark:text-zinc-100'>Obras recomendadas</h3>
      <div className='mt-8 flex h-full w-full flex-col'>
        <div className='group mt-6 h-56 w-full'>
          <ObraCard
            id={1}
            title='Breaking bad'
            type='serie'
            image='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776'
            variant='yellow'
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
            id={2}
            title='Barbie'
            type='pelicula'
            image='https://m.media-amazon.com/images/M/MV5BNGY0ZjA3MzAtYjIwOS00NTk5LThmMzEtNjI0MmU4MzQ1NmRiXkEyXkFqcGdeQWFybm8@._V1_QL75_UY281_CR0,0,500,281_.jpg'
            variant='pink'
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

export default ObrasRecomendadas;
