import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slide-blog',
  templateUrl: './slide-blog.component.html',
  styleUrls: ['./slide-blog.component.scss']
})
export class SlideBlogComponent {

  constructor(private ionMenu: MenuController) { }
  menu = 'assets/menu.png';

  openMenu() {
    this.ionMenu.open();
  }
}
