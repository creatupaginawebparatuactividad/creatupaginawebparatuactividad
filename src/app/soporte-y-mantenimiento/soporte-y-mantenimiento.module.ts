import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoporteYMantenimientoRoutingModule } from './soporte-y-mantenimiento-routing.module';
import { SoporteYMantenimientoComponent } from './component/soporte-y-mantenimiento.component';
import { HeaderModule } from '../shared/header/header.module';


@NgModule({
  declarations: [
    SoporteYMantenimientoComponent
  ],
  imports: [
    CommonModule,
    SoporteYMantenimientoRoutingModule,
    HeaderModule
  ]
})
export class SoporteYMantenimientoModule { }
