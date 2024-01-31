import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu-evolutivos-de-tu-web',
  templateUrl: './slide-mobile-menu-evolutivos-de-tu-web.component.html',
  styleUrls: ['./slide-mobile-menu-evolutivos-de-tu-web.component.scss']
})
export class SlideMobileMenuEvolutivosDeTuWebComponent {

  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}