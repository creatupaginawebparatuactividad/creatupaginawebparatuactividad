import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutivosDeTuWebRoutingModule } from './evolutivos-de-tu-web-routing.module';
import { EvolutivosDeTuWebComponent } from './component/evolutivos-de-tu-web.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { BodyEvolutivosDeTuWebComponent } from './body-evolutivos-de-tu-web/body-evolutivos-de-tu-web.component';
import { SlideMobileMenuEvolutivosDeTuWebComponent } from './slide-mobile-menu-evolutivos-de-tu-web/slide-mobile-menu-evolutivos-de-tu-web.component';
import { IonicModule } from '@ionic/angular';
import { MobileBodyHeaderModule } from '../shared/mobile-body-header/mobile-body-header.module';
import { DesktopBodyHeaderModule } from '../shared/desktop-body-header/desktop-body-header.module';
import { TapeModule } from '../shared/tape/tape.module';


@NgModule({
  declarations: [
    EvolutivosDeTuWebComponent,
    BodyEvolutivosDeTuWebComponent,
    SlideMobileMenuEvolutivosDeTuWebComponent
  ],
  imports: [
    CommonModule,
    EvolutivosDeTuWebRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    IonicModule,
    MobileBodyHeaderModule,
    DesktopBodyHeaderModule,
    TapeModule
  ]
})
export class EvolutivosDeTuWebModule { }
