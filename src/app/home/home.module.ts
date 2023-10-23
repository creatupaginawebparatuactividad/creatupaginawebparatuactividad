import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home.component';
import {  NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, BodyComponent, FooterComponent, MenuComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownModule
  ]
})
export class HomeModule { }
