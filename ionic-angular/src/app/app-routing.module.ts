import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app/inicio',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'app/resenas',
    loadChildren: () =>
      import('./resenas/resenas.module').then(m => m.ResenasPageModule),
  },
  {
    path: 'app/obras',
    loadChildren: () =>
      import('./obras/obras.module').then(m => m.ObrasPageModule),
  },
  {
    path: 'app/cuenta',
    loadChildren: () =>
      import('./cuenta/cuenta.module').then(m => m.CuentaPageModule),
  },
  {
    path: 'app',
    redirectTo: 'app/inicio',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'app/inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
