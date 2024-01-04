import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-mobile-menu-tu-pagina-web-a-medida',
  templateUrl: './slide-mobile-menu-tu-pagina-web-a-medida.component.html',
  styleUrls: ['./slide-mobile-menu-tu-pagina-web-a-medida.component.scss']
})
export class SlideMobileMenuTuPaginaWebAMedidaComponent {
  constructor(private ionMenu: MenuController) { }

  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}
