import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoporteYMantenimientoRoutingModule } from './soporte-y-mantenimiento-routing.module';
import { SoporteYMantenimientoComponent } from './component/soporte-y-mantenimiento.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';


@NgModule({
  declarations: [
    SoporteYMantenimientoComponent
  ],
  imports: [
    CommonModule,
    SoporteYMantenimientoRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule
  ]
})
export class SoporteYMantenimientoModule { }
