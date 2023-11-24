import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuPaginaWebAMedidaRoutingModule } from './tu-pagina-web-a-medida-routing.module';
import { TuPaginaWebAMedidaComponent } from './component/tu-pagina-web-a-medida.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { IonicModule } from '@ionic/angular';
import { SlideMobileMenuTuPaginaWebAMedidaComponent } from './slide-mobile-menu-tu-pagina-web-a-medida/slide-mobile-menu-tu-pagina-web-a-medida.component';
import { BodyTuPaginaWebAMedidaComponent } from './body-tu-pagina-web-a-medida/body-tu-pagina-web-a-medida.component';


@NgModule({
  declarations: [
    TuPaginaWebAMedidaComponent,
    SlideMobileMenuTuPaginaWebAMedidaComponent,
    BodyTuPaginaWebAMedidaComponent
  ],
  imports: [
    CommonModule,
    TuPaginaWebAMedidaRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    IonicModule
  ]
})
export class TuPaginaWebAMedidaModule { }
