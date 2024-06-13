import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './component/contacto.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { SlideContactoComponent } from './slide-contacto/slide-contacto.component';
import { BodyContactoComponent } from './body-contacto/body-contacto.component';
import { IonicModule } from '@ionic/angular';
import { TapeModule } from '../shared/tape/tape.module';
import { MobileBodyHeaderModule } from '../shared/mobile-body-header/mobile-body-header.module';
import { DesktopBodyHeaderModule } from '../shared/desktop-body-header/desktop-body-header.module';


@NgModule({
  declarations: [
    ContactoComponent,
    SlideContactoComponent,
    BodyContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    IonicModule,
    TapeModule,
    MobileBodyHeaderModule,
    DesktopBodyHeaderModule
  ]
})
export class ContactoModule { }
