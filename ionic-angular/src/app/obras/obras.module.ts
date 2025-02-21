import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObrasPageRoutingModule } from './obras-routing.module';

import { ObrasPage } from './obras.page';
import { MiscModule } from '../misc/misc.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObrasPageRoutingModule,
    MiscModule,
  ],
  declarations: [ObrasPage],
})
export class ObrasPageModule {}
