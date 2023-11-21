import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuPaginaWebAMedidaRoutingModule } from './tu-pagina-web-a-medida-routing.module';
import { TuPaginaWebAMedidaComponent } from './component/tu-pagina-web-a-medida.component';


@NgModule({
  declarations: [
    TuPaginaWebAMedidaComponent
  ],
  imports: [
    CommonModule,
    TuPaginaWebAMedidaRoutingModule
  ]
})
export class TuPaginaWebAMedidaModule { }
