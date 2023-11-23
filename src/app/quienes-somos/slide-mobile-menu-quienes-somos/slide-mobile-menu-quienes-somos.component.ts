import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu-quienes-somos',
  templateUrl: './slide-mobile-menu-quienes-somos.component.html',
  styleUrls: ['./slide-mobile-menu-quienes-somos.component.scss']
})
export class SlideMobileMenuQuienesSomosComponent {

  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}
