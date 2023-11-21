import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { SlideMobileMenuComponent } from './slide-mobile-menu/slide-mobile-menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  declarations: [HomeComponent, BodyComponent, FooterComponent, MenuComponent, MobileFooterComponent, SlideMobileMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    IonicModule
  ]
})
export class HomeModule { }
