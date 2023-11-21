import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutivosDeTuWebRoutingModule } from './evolutivos-de-tu-web-routing.module';
import { EvolutivosDeTuWebComponent } from './component/evolutivos-de-tu-web.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';


@NgModule({
  declarations: [
    EvolutivosDeTuWebComponent
  ],
  imports: [
    CommonModule,
    EvolutivosDeTuWebRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule
  ]
})
export class EvolutivosDeTuWebModule { }
