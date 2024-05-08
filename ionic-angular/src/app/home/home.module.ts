import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { RecomendacionesObrasComponent } from './recomendaciones-obras/recomendaciones-obras.component';
import { ResenasRecientesComponent } from './resenas-recientes/resenas-recientes.component';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MiscModule,
  ],
  declarations: [
    HomePage,
    RecomendacionesObrasComponent,
    ResenasRecientesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
