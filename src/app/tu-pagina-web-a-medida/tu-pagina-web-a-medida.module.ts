import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuPaginaWebAMedidaRoutingModule } from './tu-pagina-web-a-medida-routing.module';
import { TuPaginaWebAMedidaComponent } from './component/tu-pagina-web-a-medida.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';


@NgModule({
  declarations: [
    TuPaginaWebAMedidaComponent
  ],
  imports: [
    CommonModule,
    TuPaginaWebAMedidaRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule
  ]
})
export class TuPaginaWebAMedidaModule { }
