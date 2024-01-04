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
    IonicModule
  ]
})
export class SeoPosicionamosTuWebModule { }
