import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObrasPage } from './obras.page';

const routes: Routes = [
  {
    path: '',
    component: ObrasPage,
  },
  {
    path: 'agregar',
    loadChildren: () =>
      import('./agregar-obra/agregar-obra.module').then(
        m => m.AgregarObraPageModule
      ),
  },
  {
    path: 'desc',
    loadChildren: () =>
      import('./obra-ind/obra-ind.module').then(m => m.ObraIndPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObrasPageRoutingModule {}
