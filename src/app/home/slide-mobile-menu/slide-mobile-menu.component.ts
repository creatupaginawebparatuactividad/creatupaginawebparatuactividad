import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu',
  templateUrl: './slide-mobile-menu.component.html',
  styleUrls: ['./slide-mobile-menu.component.scss']
})
export class SlideMobileMenuComponent {
  menu = 'assets/menu.png';

  constructor(private ionMenu: MenuController) { }

  openMenu() {
    this.ionMenu.open();
  }
}
