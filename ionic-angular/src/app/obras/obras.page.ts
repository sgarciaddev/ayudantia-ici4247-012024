import { Component, OnInit } from '@angular/core';
import { obrasDisponibles } from 'src/data/obras';

const availableTabs = { recomendadas: {}, tendencias: {}, porVer: {} };

@Component({
  selector: 'app-obras',
  templateUrl: './obras.page.html',
})
export class ObrasPage implements OnInit {
  activeTab: keyof typeof availableTabs = 'recomendadas';

  obras = obrasDisponibles;

  recomendadas = [0, 3, 4, 6];
  tendencias = [1, 4, 6, 2];
  porVer = [5, 2, 6, 0];

  obrasMostrar = this.recomendadas;

  constructor() {}

  ngOnInit() {}

  changeTab(tab: keyof typeof availableTabs) {
    this.activeTab = tab;
    this.obrasMostrar = this[tab];
  }
}
