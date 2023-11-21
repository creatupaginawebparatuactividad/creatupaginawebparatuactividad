import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuPaginaWebAMedidaComponent } from './component/tu-pagina-web-a-medida.component';

const routes: Routes = [
  { path: '', component: TuPaginaWebAMedidaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuPaginaWebAMedidaRoutingModule { }
