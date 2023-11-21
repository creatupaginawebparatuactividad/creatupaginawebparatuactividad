import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { PortafolioComponent } from './component/portafolio.component';
import { HeaderModule } from '../shared/header/header.module';


@NgModule({
  declarations: [
    PortafolioComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    HeaderModule
  ]
})
export class PortafolioModule { }
