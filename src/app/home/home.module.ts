import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MobileFooterComponent } from './mobile-footer/mobile-footer.component';
import { SlideMobileMenuComponent } from './slide-mobile-menu/slide-mobile-menu.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, BodyComponent, FooterComponent, MenuComponent, MobileFooterComponent, SlideMobileMenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule
  ]
})
export class HomeModule { }
