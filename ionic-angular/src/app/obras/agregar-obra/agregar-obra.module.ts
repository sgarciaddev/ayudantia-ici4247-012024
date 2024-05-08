import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarObraPageRoutingModule } from './agregar-obra-routing.module';

import { AgregarObraPage } from './agregar-obra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarObraPageRoutingModule
  ],
  declarations: [AgregarObraPage]
})
export class AgregarObraPageModule {}
