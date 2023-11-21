import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule)
  },
  {
    path: 'tu-pagina-web-a-medida',
    loadChildren: () => import('./tu-pagina-web-a-medida/tu-pagina-web-a-medida.module').then(m => m.TuPaginaWebAMedidaModule)
  },
  {
    path: 'seo-posicionamos-tu-web',
    loadChildren: () => import('./seo-posicionamos-tu-web/seo-posicionamos-tu-web.module').then(m => m.SeoPosicionamosTuWebModule)
  },
  {
    path: 'dominio-personalizado',
    loadChildren: () => import('./dominio-personalizado/dominio-personalizado.module').then(m => m.DominioPersonalizadoModule)
  },
  {
    path: 'evolutivos-de-tu-web',
    loadChildren: () => import('./evolutivos-de-tu-web/evolutivos-de-tu-web.module').then(m => m.EvolutivosDeTuWebModule)
  },
  {
    path: 'soporte-y-mantenimiento',
    loadChildren: () => import('./soporte-y-mantenimiento/soporte-y-mantenimiento.module').then(m => m.SoporteYMantenimientoModule)
  },
  {
    path: 'portafolio',
    loadChildren: () => import('./portafolio/portafolio.module').then(m => m.PortafolioModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
