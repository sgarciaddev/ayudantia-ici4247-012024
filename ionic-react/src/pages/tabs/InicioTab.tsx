import { IonContent, IonHeader, IonItem, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles/HomeSlider.css';
import HomeSlider, { HomeSlideType, HomeSliderVariant } from '@/components/home/HomeSlider';
import { star, starHalf, starOutline } from 'ionicons/icons';
import HomeResena from '@/components/home/HomeResena';

const obras: Array<{ title: string; type: HomeSlideType; image: string; variant: HomeSliderVariant }> = [
  {
    title: 'Breaking bad',
    type: 'serie',
    image:
      'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776',
    variant: 'yellow',
  },
  {
    title: 'Barbie',
    type: 'pelicula',
    image:
      'https://m.media-amazon.com/images/M/MV5BNGY0ZjA3MzAtYjIwOS00NTk5LThmMzEtNjI0MmU4MzQ1NmRiXkEyXkFqcGdeQWFybm8@._V1_QL75_UY281_CR0,0,500,281_.jpg',
    variant: 'pink',
  },
  {
    title: 'One punch man',
    type: 'anime',
    image: 'https://images.thedirect.com/media/article_full/one-punch.jpg',
    variant: 'violet',
  },
  {
    title: 'Dark',
    type: 'serie',
    image:
      'https://images.theconversation.com/files/347289/original/file-20200714-139702-vkn6aw.png?ixlib=rb-4.1.0&rect=0%2C0%2C1278%2C638&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
    variant: 'gray',
  },
  {
    title: 'Oppenheimer',
    type: 'pelicula',
    image: 'https://www.sebastianzavala.com/wp-content/uploads/2023/07/oppenheimer-1.jpeg',
    variant: 'amber',
  },
  {
    title: 'Vinland saga',
    type: 'anime',
    image: 'https://assets.mubicdn.net/images/film/253853/image-w1280.jpg?1578631914',
    variant: 'zinc',
  },
  {
    title: 'Rick & Morty',
    type: 'serie',
    image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/10/09/6523c754a7788.png',
    variant: 'cyan',
  },
];

const InicioTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='my-6 w-full px-4'>
          <h3 className='text-2xl font-medium text-zinc-800 dark:text-zinc-100'>Recomendaciones de obras</h3>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            navigation={{
              enabled: true,
            }}
            modules={[Navigation]}
            className='mt-4 h-56 w-full'
          >
            {obras.map((obra, index) => (
              <SwiperSlide key={index} className='group relative isolate'>
                <HomeSlider {...obra} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <hr className='my-10 h-px w-full border-t-0 bg-transparent bg-gradient-to-r from-black/30 via-black to-black/30 opacity-60 dark:from-white/30 dark:via-white dark:to-white/30' />
        <IonList>
          <IonListHeader>
            <h3 className='text-2xl font-medium text-zinc-800 dark:text-zinc-100'>Reseñas recientes</h3>
          </IonListHeader>
          <IonItem className='mt-4'>
            <HomeResena
              rating={4.0}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/ClaudioCubillosF.jpg'
              username='claudio.cubillos'
            />
          </IonItem>
          <IonItem className='mt-4'>
            <HomeResena
              rating={4.5}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/RicardoSotoD-1.jpg'
              username='ricardo.soto'
            />
          </IonItem>
          <IonItem className='mt-4'>
            <HomeResena
              rating={3.5}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/IvanMercadoB.jpg'
              username='ivan.mercado'
            />
          </IonItem>
          <IonItem className='mt-4'>
            <HomeResena
              rating={5.0}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/10/fotoSandraCano2-e1595970787778.png'
              username='sandra.cano'
            />
          </IonItem>
          <IonItem className='mt-4'>
            <HomeResena
              rating={2.5}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/IgnacioArayaZ.jpg'
              username='ignacio.araya'
            />
          </IonItem>
          <IonItem className='mt-4'>
            <HomeResena
              rating={4.5}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/WenceslaoPalmaM.jpg'
              username='wenceslao.palma'
            />
          </IonItem>
          <IonItem className='mt-4'>
            <HomeResena
              rating={3.0}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/10/122139330_1301305493538238_2057443899688640217_n-1.jpg'
              username='daniela.quinones'
            />
          </IonItem>
          <IonItem className='mt-4'>
            <HomeResena
              rating={1.5}
              review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              userImg='https://www.inf.ucv.cl/wp-content/uploads/2019/11/GuillermoCabreraG.jpg'
              username='guillermo.cabrera'
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default InicioTab;
