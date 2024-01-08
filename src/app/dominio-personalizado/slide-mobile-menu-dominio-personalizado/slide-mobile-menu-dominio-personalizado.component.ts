import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu-dominio-personalizado',
  templateUrl: './slide-mobile-menu-dominio-personalizado.component.html',
  styleUrls: ['./slide-mobile-menu-dominio-personalizado.component.scss']
})
export class SlideMobileMenuDominioPersonalizadoComponent {

  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}