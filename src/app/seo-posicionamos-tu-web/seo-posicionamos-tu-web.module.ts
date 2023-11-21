import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoPosicionamosTuWebRoutingModule } from './seo-posicionamos-tu-web-routing.module';
import { SeoPosicionamosTuWebComponent } from './component/seo-posicionamos-tu-web.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';

@NgModule({
  declarations: [
    SeoPosicionamosTuWebComponent
  ],
  imports: [
    CommonModule,
    SeoPosicionamosTuWebRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule
  ]
})
export class SeoPosicionamosTuWebModule { }
