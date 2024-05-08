import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObraIndPage } from './obra-ind.page';

const routes: Routes = [
  {
    path: ':id',
    component: ObraIndPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObraIndPageRoutingModule {}
