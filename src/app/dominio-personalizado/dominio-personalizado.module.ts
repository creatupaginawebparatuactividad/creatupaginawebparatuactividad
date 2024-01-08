import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DominioPersonalizadoRoutingModule } from './dominio-personalizado-routing.module';
import { DominioPersonalizadoComponent } from './component/dominio-personalizado.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { SlideMobileMenuDominioPersonalizadoComponent } from './slide-mobile-menu-dominio-personalizado/slide-mobile-menu-dominio-personalizado.component';
import { IonicModule } from '@ionic/angular';
import { BodyDominioPersonalizadoComponent } from './body-dominio-personalizado/body-dominio-personalizado.component';
import { MobileBodyHeaderModule } from '../shared/mobile-body-header/mobile-body-header.module';
import { DesktopBodyHeaderModule } from '../shared/desktop-body-header/desktop-body-header.module';
import { TapeModule } from '../shared/tape/tape.module';

@NgModule({
  declarations: [
    DominioPersonalizadoComponent,
    SlideMobileMenuDominioPersonalizadoComponent,
    BodyDominioPersonalizadoComponent
  ],
  imports: [
    CommonModule,
    DominioPersonalizadoRoutingModule,
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
export class DominioPersonalizadoModule { }
