import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './component/portafolio.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { IonicModule } from '@ionic/angular';
import { BodyPortafolioComponent } from './body-portafolio/body-portafolio.component';
import { SlideMobileMenuPortafolioComponent } from './slide-mobile-menu-portafolio/slide-mobile-menu-portafolio.component';
import { TapeModule } from '../shared/tape/tape.module';
import { MobileBodyHeaderModule } from '../shared/mobile-body-header/mobile-body-header.module';
import { DesktopBodyHeaderModule } from '../shared/desktop-body-header/desktop-body-header.module';
import { GenericIonMenuModule } from '../shared/generic-ion-menu/generic-ion-menu.module';


@NgModule({
  declarations: [
    PortafolioComponent,
    BodyPortafolioComponent,
    SlideMobileMenuPortafolioComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    IonicModule,
    TapeModule,
    MobileBodyHeaderModule,
    DesktopBodyHeaderModule,
    GenericIonMenuModule
  ]
})
export class PortafolioModule { }
