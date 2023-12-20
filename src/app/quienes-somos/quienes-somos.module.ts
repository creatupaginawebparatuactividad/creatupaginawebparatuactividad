import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { QuienesSomosComponent } from './component/quienes-somos.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { IonicModule } from '@ionic/angular';
import { BodyQuienesSomosComponent } from './body-quienes-somos/body-quienes-somos.component';
import { SlideMobileMenuQuienesSomosComponent } from './slide-mobile-menu-quienes-somos/slide-mobile-menu-quienes-somos.component';
import { TapeModule } from '../shared/tape/tape.module';
import { LightTitleModule } from '../shared/light-title/light-title.module';

@NgModule({
  declarations: [QuienesSomosComponent, BodyQuienesSomosComponent, SlideMobileMenuQuienesSomosComponent],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    TapeModule,
    LightTitleModule,
    IonicModule
  ]
})
export class QuienesSomosModule { }
