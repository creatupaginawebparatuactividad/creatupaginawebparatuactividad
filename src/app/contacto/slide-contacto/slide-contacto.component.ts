import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-contacto',
  templateUrl: './slide-contacto.component.html',
  styleUrls: ['./slide-contacto.component.scss']
})
export class SlideContactoComponent {

  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}
