import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoPosicionamosTuWebRoutingModule } from './seo-posicionamos-tu-web-routing.module';
import { SeoPosicionamosTuWebComponent } from './component/seo-posicionamos-tu-web.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { SlideMobileMenuSeoPosicionamosTuWebComponent } from './slide-mobile-menu-seo-posicionamos-tu-web/slide-mobile-menu-seo-posicionamos-tu-web.component';
import { BodySeoPosicionamosTuWebComponent } from './body-seo-posicionamos-tu-web/body-seo-posicionamos-tu-web.component';
import { IonicModule } from '@ionic/angular';
import { MobileBodyHeaderModule } from '../shared/mobile-body-header/mobile-body-header.module';
import { TapeModule } from '../shared/tape/tape.module';
import { DesktopBodyHeaderModule } from '../shared/desktop-body-header/desktop-body-header.module';

@NgModule({
  declarations: [
    SeoPosicionamosTuWebComponent,
    SlideMobileMenuSeoPosicionamosTuWebComponent,
    BodySeoPosicionamosTuWebComponent
  ],
  imports: [
    CommonModule,
    SeoPosicionamosTuWebRoutingModule,
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
export class SeoPosicionamosTuWebModule { }
