import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoporteYMantenimientoRoutingModule } from './soporte-y-mantenimiento-routing.module';
import { SoporteYMantenimientoComponent } from './component/soporte-y-mantenimiento.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { MobileBodyHeaderModule } from '../shared/mobile-body-header/mobile-body-header.module';
import { BodySoporteYMantenimientoComponent } from './body-soporte-y-mantenimiento/body-soporte-y-mantenimiento.component';
import { DesktopBodyHeaderModule } from '../shared/desktop-body-header/desktop-body-header.module';
import { TapeModule } from '../shared/tape/tape.module';
import { IonicModule } from '@ionic/angular';
import { SlideSoporteYMantenimientoComponent } from './slide-soporte-y-mantenimiento/slide-soporte-y-mantenimiento.component';
import { GenericIonMenuModule } from '../shared/generic-ion-menu/generic-ion-menu.module';


@NgModule({
  declarations: [
    SoporteYMantenimientoComponent,
    BodySoporteYMantenimientoComponent,
    SlideSoporteYMantenimientoComponent
  ],
  imports: [
    CommonModule,
    SoporteYMantenimientoRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    MobileBodyHeaderModule,
    DesktopBodyHeaderModule,
    TapeModule,
    IonicModule,
    GenericIonMenuModule
  ]
})
export class SoporteYMantenimientoModule { }
