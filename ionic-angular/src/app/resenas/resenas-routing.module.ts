import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResenasPage } from './resenas.page';

const routes: Routes = [
  {
    path: '',
    component: ResenasPage,
  },
  {
    path: 'agregar',
    loadChildren: () =>
      import('./agregar-resena/agregar-resena.module').then(
        m => m.AgregarResenaPageModule
      ),
  },
  {
    path: 'desc',
    loadChildren: () =>
      import('./resena-ind/resena-ind.module').then(m => m.ResenaIndPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResenasPageRoutingModule {}
