import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-soporte-y-mantenimiento',
  templateUrl: './slide-soporte-y-mantenimiento.component.html',
  styleUrls: ['./slide-soporte-y-mantenimiento.component.scss']
})
export class SlideSoporteYMantenimientoComponent {
  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}
