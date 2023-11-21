import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { BodyComponent } from './body/body.component';
import { SlideMobileMenuComponent } from './slide-mobile-menu/slide-mobile-menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';

@NgModule({
  declarations: [HomeComponent, BodyComponent, SlideMobileMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    IonicModule
  ]
})
export class HomeModule { }
