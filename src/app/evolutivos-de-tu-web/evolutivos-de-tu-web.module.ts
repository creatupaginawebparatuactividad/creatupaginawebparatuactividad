import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvolutivosDeTuWebRoutingModule } from './evolutivos-de-tu-web-routing.module';
import { EvolutivosDeTuWebComponent } from './component/evolutivos-de-tu-web.component';
import { HeaderModule } from '../shared/header/header.module';


@NgModule({
  declarations: [
    EvolutivosDeTuWebComponent
  ],
  imports: [
    CommonModule,
    EvolutivosDeTuWebRoutingModule,
    HeaderModule
  ]
})
export class EvolutivosDeTuWebModule { }
