import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DominioPersonalizadoRoutingModule } from './dominio-personalizado-routing.module';
import { DominioPersonalizadoComponent } from './component/dominio-personalizado.component';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  declarations: [
    DominioPersonalizadoComponent
  ],
  imports: [
    CommonModule,
    DominioPersonalizadoRoutingModule,
    HeaderModule
  ]
})
export class DominioPersonalizadoModule { }
