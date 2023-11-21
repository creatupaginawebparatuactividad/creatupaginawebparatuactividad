import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { QuienesSomosComponent } from './component/quienes-somos.component';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule,
    HeaderModule
  ]
})
export class QuienesSomosModule { }
