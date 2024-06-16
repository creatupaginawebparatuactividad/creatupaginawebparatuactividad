import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu-home',
  templateUrl: './slide-mobile-menu-home.component.html',
  styleUrls: ['./slide-mobile-menu-home.component.scss']
})
export class SlideMobileMenuHomeComponent {
  menu = 'assets/menu.png';

  constructor(private ionMenu: MenuController) { }

  openMenu() {
    this.ionMenu.open();
  }
}
