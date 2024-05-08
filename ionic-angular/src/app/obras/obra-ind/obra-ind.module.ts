import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObraIndPageRoutingModule } from './obra-ind-routing.module';

import { ObraIndPage } from './obra-ind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObraIndPageRoutingModule
  ],
  declarations: [ObraIndPage]
})
export class ObraIndPageModule {}
