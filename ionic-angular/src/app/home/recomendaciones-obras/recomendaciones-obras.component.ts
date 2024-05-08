import { Component, OnInit } from '@angular/core';

import {
  ObraCardVariant,
  ObraType,
} from 'src/app/misc/obra-individual/ObraTypes';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-recomendaciones-obras',
  templateUrl: './recomendaciones-obras.component.html',
})
export class RecomendacionesObrasComponent implements OnInit {
  obrasRecomendadas: Array<{
    title: string;
    id: number;
    type: ObraType;
    image: string;
    variant: ObraCardVariant;
  }> = [
    {
      title: 'Breaking bad',
      id: 1,
      type: 'serie',
      image:
        'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776',
      variant: 'yellow',
    },
    {
      title: 'Barbie',
      id: 2,
      type: 'pelicula',
      image:
        'https://m.media-amazon.com/images/M/MV5BNGY0ZjA3MzAtYjIwOS00NTk5LThmMzEtNjI0MmU4MzQ1NmRiXkEyXkFqcGdeQWFybm8@._V1_QL75_UY281_CR0,0,500,281_.jpg',
      variant: 'pink',
    },
    {
      title: 'One punch man',
      id: 3,
      type: 'anime',
      image: 'https://images.thedirect.com/media/article_full/one-punch.jpg',
      variant: 'violet',
    },
    {
      title: 'Dark',
      id: 4,
      type: 'serie',
      image:
        'https://images.theconversation.com/files/347289/original/file-20200714-139702-vkn6aw.png?ixlib=rb-4.1.0&rect=0%2C0%2C1278%2C638&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
      variant: 'gray',
    },
    {
      title: 'Oppenheimer',
      id: 5,
      type: 'pelicula',
      image:
        'https://www.sebastianzavala.com/wp-content/uploads/2023/07/oppenheimer-1.jpeg',
      variant: 'amber',
    },
    {
      title: 'Vinland saga',
      id: 6,
      type: 'anime',
      image:
        'https://assets.mubicdn.net/images/film/253853/image-w1280.jpg?1578631914',
      variant: 'zinc',
    },
    {
      title: 'Rick & Morty',
      id: 7,
      type: 'serie',
      image:
        'https://www.lavanguardia.com/files/og_thumbnail/uploads/2023/10/09/6523c754a7788.png',
      variant: 'cyan',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
