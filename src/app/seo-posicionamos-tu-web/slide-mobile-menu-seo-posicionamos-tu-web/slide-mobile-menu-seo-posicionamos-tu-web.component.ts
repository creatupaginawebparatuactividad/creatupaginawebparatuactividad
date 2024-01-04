import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu-seo-posicionamos-tu-web',
  templateUrl: './slide-mobile-menu-seo-posicionamos-tu-web.component.html',
  styleUrls: ['./slide-mobile-menu-seo-posicionamos-tu-web.component.scss']
})
export class SlideMobileMenuSeoPosicionamosTuWebComponent {

  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}