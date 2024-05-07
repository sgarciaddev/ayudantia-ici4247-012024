import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstrellasComponent } from './estrellas/estrellas.component';
import { ObraIndividualComponent } from './obra-individual/obra-individual.component';
import { ResenaIndividualComponent } from './resena-individual/resena-individual.component';
import { SeparadorComponent } from './separador/separador.component';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EstrellasComponent,
    ObraIndividualComponent,
    ResenaIndividualComponent,
    SeparadorComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [
    EstrellasComponent,
    ObraIndividualComponent,
    ResenaIndividualComponent,
    SeparadorComponent,
  ],
})
export class MiscModule {}
