import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu-portafolio',
  templateUrl: './slide-mobile-menu-portafolio.component.html',
  styleUrls: ['./slide-mobile-menu-portafolio.component.scss']
})
export class SlideMobileMenuPortafolioComponent {

  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}
