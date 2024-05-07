import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResenaIndPageRoutingModule } from './resena-ind-routing.module';

import { ResenaIndPage } from './resena-ind.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ResenaIndPageRoutingModule],
  declarations: [ResenaIndPage],
})
export class ResenaIndPageModule {}
