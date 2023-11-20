import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-mobile-menu',
  templateUrl: './slide-mobile-menu.component.html',
  styleUrls: ['./slide-mobile-menu.component.scss']
})
export class SlideMobileMenuComponent {
  menu='assets/menu.png';

  openSlideMenu() {
    const a = document.querySelector(".slide-menu-selector") as HTMLElement;
    if (a.classList.contains("slide")) {
      a.classList.remove("slide");
      a.classList.add("slide-back");
    } else {
      a.classList.remove("slide-back");
      a.classList.add("slide");
    }
  }
}
