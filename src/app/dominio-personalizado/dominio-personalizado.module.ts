import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DominioPersonalizadoRoutingModule } from './dominio-personalizado-routing.module';
import { DominioPersonalizadoComponent } from './component/dominio-personalizado.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';

@NgModule({
  declarations: [
    DominioPersonalizadoComponent
  ],
  imports: [
    CommonModule,
    DominioPersonalizadoRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule
  ]
})
export class DominioPersonalizadoModule { }
