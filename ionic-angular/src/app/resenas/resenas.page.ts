import { Component, OnInit } from '@angular/core';

const availableTabs = { recientes: {}, favoritas: {}, tendencias: {} };

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.page.html',
  styleUrls: ['./resenas.page.scss'],
})
export class ResenasPage implements OnInit {
  activeTab: keyof typeof availableTabs = 'recientes';
  resenas: Array<{
    username: string;
    userImg: string;
    rating: number;
    obra: { title: string; id: number };
    review: string;
  }> = [
    {
      username: 'claudio.cubillos',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/11/ClaudioCubillosF.jpg',
      rating: 4.0,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'ricardo.soto',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/11/RicardoSotoD-1.jpg',
      rating: 4.5,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'ivan.mercado',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/11/IvanMercadoB.jpg',
      rating: 3.5,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'sandra.cano',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/10/fotoSandraCano2-e1595970787778.png',
      rating: 5.0,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'ignacio.araya',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/11/IgnacioArayaZ.jpg',
      rating: 2.5,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'wenceslao.palma',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/11/WenceslaoPalmaM.jpg',
      rating: 4.5,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'daniela.quinones',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/10/122139330_1301305493538238_2057443899688640217_n-1.jpg',
      rating: 3.0,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      username: 'guillermo.cabrera',
      userImg:
        'https://www.inf.ucv.cl/wp-content/uploads/2019/11/GuillermoCabreraG.jpg',
      rating: 1.5,
      obra: {
        title: 'Obra de ejemplo',
        id: 1,
      },
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  recientes = [6, 7];
  favoritas = [0, 1, 2];
  tendencias = [3, 4, 5];

  resenasMostrar = this.recientes;

  constructor() {}

  ngOnInit() {}

  changeTab(tab: keyof typeof availableTabs) {
    this.activeTab = tab;
    this.resenasMostrar = this[tab];
  }
}
