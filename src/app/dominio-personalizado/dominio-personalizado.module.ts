import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DominioPersonalizadoRoutingModule } from './dominio-personalizado-routing.module';
import { DominioPersonalizadoComponent } from './component/dominio-personalizado.component';

@NgModule({
  declarations: [
    DominioPersonalizadoComponent
  ],
  imports: [
    CommonModule,
    DominioPersonalizadoRoutingModule
  ]
})
export class DominioPersonalizadoModule { }
