import { Component, OnInit } from '@angular/core';
import { resenasDisponibles } from 'src/data/resenas';

const availableTabs = { recientes: {}, favoritas: {}, tendencias: {} };

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.page.html',
  styleUrls: ['./resenas.page.scss'],
})
export class ResenasPage implements OnInit {
  activeTab: keyof typeof availableTabs = 'recientes';
  resenas = resenasDisponibles;

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
