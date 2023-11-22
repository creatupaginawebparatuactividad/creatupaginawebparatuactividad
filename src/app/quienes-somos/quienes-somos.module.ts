import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { QuienesSomosComponent } from './component/quienes-somos.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [QuienesSomosComponent],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    IonicModule
  ]
})
export class QuienesSomosModule { }
