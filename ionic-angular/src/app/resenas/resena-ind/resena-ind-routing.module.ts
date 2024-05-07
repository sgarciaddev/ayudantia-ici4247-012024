import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResenaIndPage } from './resena-ind.page';

const routes: Routes = [
  {
    path: ':id',
    component: ResenaIndPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResenaIndPageRoutingModule {}
