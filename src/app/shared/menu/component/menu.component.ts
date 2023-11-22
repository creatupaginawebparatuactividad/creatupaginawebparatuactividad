import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  constructor(private router: Router) { }

  setMenuLinksStyleSelected(event: Event) {
    const menuLinkNodeSelectedId = this.setMenuLinksStyle(event);
    this.navigateToPageSelected(menuLinkNodeSelectedId);
  }

  setMenuLinksStyle(event: Event) {
    const menuLinkNodeSelected = event.currentTarget as HTMLElement;
    const arra = (menuLinkNodeSelected.parentNode as HTMLElement).getElementsByTagName("a")
    for (let index = 0; index < arra.length; index++) {
      const menuLinkNode = arra[index] as HTMLElement;
      menuLinkNode.classList.remove("active");
    }
    menuLinkNodeSelected.classList.add("active");
    return menuLinkNodeSelected.id;
  }

  navigateToPageSelected(idPage: String) {
    switch (idPage) {
      case "Home":
        this.router.navigateByUrl('');
        break;

      case "Quiénes somos":
        this.router.navigateByUrl('quienes-somos');
        break;

      case "Qué Hacemos ...":
        break;

      case "Tu página web a medida":
        this.router.navigateByUrl('tu-pagina-web-a-medida');
        break;

      case "SEO, posicionamos tu web":
        this.router.navigateByUrl('seo-posicionamos-tu-web');

        break;

      case "Dominio personalizado":
        this.router.navigateByUrl('dominio-personalizado');
        break;

      case "Evolutivos de tu web":
        this.router.navigateByUrl('evolutivos-de-tu-web');
        break;

      case "Soporte y mantenimiento":
        this.router.navigateByUrl('soporte-y-mantenimiento');
        break;

      case "Portafolio":
        this.router.navigateByUrl('portafolio');
        break;

      case "Blog":
        this.router.navigateByUrl('blog');
        break;

      case "Contacto":
        this.router.navigateByUrl('contacto');
        break;

      default:
        break;
    }

  }
}
