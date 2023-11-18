import { Component } from '@angular/core';

export interface HtmlElementReturned {
  classList: String[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})



export class MenuComponent {

  setMenuLinksStyleSelected(event: Event) {
    const menuLinkNodeSelectedId = this.setMenuLinksStyle(event);
    this.navigateToPageSelected(menuLinkNodeSelectedId);
  }

  setMenuLinksStyle(event: Event) {
    const menuNode = document.querySelector(".menu-selector") as HTMLElement;
    const links = menuNode.getElementsByTagName("a");
    // listA.childNodes.forEach(childMenuLinksNode => {
    //   const menuLinkNode = childMenuLinksNode as HTMLElement;
    //   menuLinkNode.classList.remove("active")
    // });

    for (let index = 0; index < links.length; index++) {
      const menuLinkNode = links[index] as HTMLElement;
      menuLinkNode.classList.remove("active")
    }
    const menuLinkNodeSelected = event.currentTarget as HTMLElement;
    menuLinkNodeSelected.classList.add("active");
    return menuLinkNodeSelected.id;
  }

  navigateToPageSelected(idPage: String) {
    switch (idPage) {
      case "Home":
        console.log("Home");
        break;

      case "Quiénes somos":
        console.log("Quiénes somos");
        break;

      case "Qué Hacemos ...":
        console.log("Qué Hacemos ...");
        break;

      case "Tu página web a medida":
        console.log("Tu página web a medida");
        break;

      case "SEO, posicionamos tu web":
        console.log("SEO, posicionamos tu web");
        break;

      case "Dominio personalizado":
        console.log("Dominio personalizado");
        break;

      case "Evolutivos de tu web":
        console.log("Evolutivos de tu web");
        break;

      case "Soporte y mantenimiento":
        console.log("Soporte y mantenimiento");
        break;

      case "Portafolio":
        console.log("Portafolio");
        break;

      case "Blog":
        console.log("Blog");
        break;

      case "Contacto":
        console.log("Contacto");
        break;

      default:
        break;
    }

  }
}
