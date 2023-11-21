import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoPosicionamosTuWebRoutingModule } from './seo-posicionamos-tu-web-routing.module';
import { SeoPosicionamosTuWebComponent } from './component/seo-posicionamos-tu-web.component';
import { HeaderModule } from '../shared/header/header.module';


@NgModule({
  declarations: [
    SeoPosicionamosTuWebComponent
  ],
  imports: [
    CommonModule,
    SeoPosicionamosTuWebRoutingModule,
    HeaderModule
  ]
})
export class SeoPosicionamosTuWebModule { }
