import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  constructor(private router: Router, private menuService: MenuService) { }

  homeIsActive = true;
  quienesSomosIsActive = false;
  queHacemosIsActive = false;
  tuPaginaWebIsActive = false;
  seoPosicionamosTuWebIsActive = false;
  dominioPersonalizadoIsActive = false;
  evolutivosDeTuWebIsActive = false;
  soporteYMantenimientoIsActive = false;
  portafolioIsActive = false;
  blogIsActive = false;
  contactoIsActive = false;

  ngOnInit() {
    this.homeIsActive = this.menuService.homeIsActive
    this.quienesSomosIsActive = this.menuService.quienesSomosIsActive
    this.queHacemosIsActive = this.menuService.queHacemosIsActive
    this.tuPaginaWebIsActive = this.menuService.tuPaginaWebIsActive
    this.seoPosicionamosTuWebIsActive = this.menuService.seoPosicionamosTuWebIsActive
    this.dominioPersonalizadoIsActive = this.menuService.dominioPersonalizadoIsActive
    this.evolutivosDeTuWebIsActive = this.menuService.evolutivosDeTuWebIsActive
    this.soporteYMantenimientoIsActive = this.menuService.soporteYMantenimientoIsActive
    this.portafolioIsActive = this.menuService.portafolioIsActive
    this.blogIsActive = this.menuService.blogIsActive
    this.contactoIsActive = this.menuService.contactoIsActive
  }

  setMenuLinksStyleSelected(event: Event) {
    const menuLinkNodeSelectedId = this.setMenuLinksStyle(event);
    this.navigateToPageSelected(menuLinkNodeSelectedId);
  }

  setMenuLinksStyle(event: Event) {
    this.menuService.resetNavStyles();

    const menuLinkNodeSelected = event.currentTarget as HTMLElement;
    // const arra = (menuLinkNodeSelected.parentNode as HTMLElement).getElementsByTagName("a")
    // for (let index = 0; index < arra.length; index++) {
    //   const menuLinkNode = arra[index] as HTMLElement;
    //   menuLinkNode.classList.remove("active");
    // }
    // menuLinkNodeSelected.classList.add("active");
    return menuLinkNodeSelected.id;
  }

  navigateToPageSelected(idPage: String) {
    switch (idPage) {
      case "Home":
        this.menuService.homeIsActive = true;
        this.router.navigateByUrl('');
        break;

      case "Quiénes somos":
        this.menuService.quienesSomosIsActive = true;
        this.router.navigateByUrl('quienes-somos');
        break;

      case "Qué Hacemos ...":
        this.menuService.queHacemosIsActive = true;
        break;

      case "Tu página web a medida":
        this.menuService.queHacemosIsActive = true;
        this.menuService.tuPaginaWebIsActive = true;
        this.router.navigateByUrl('tu-pagina-web-a-medida');
        break;

      case "SEO, posicionamos tu web":
        this.menuService.queHacemosIsActive = true;
        this.menuService.seoPosicionamosTuWebIsActive = true;
        this.router.navigateByUrl('seo-posicionamos-tu-web');

        break;

      case "Dominio personalizado":
        this.menuService.queHacemosIsActive = true;
        this.menuService.dominioPersonalizadoIsActive = true;
        this.router.navigateByUrl('dominio-personalizado');
        break;

      case "Evolutivos de tu web":
        this.menuService.queHacemosIsActive = true;
        this.menuService.evolutivosDeTuWebIsActive = true;
        this.router.navigateByUrl('evolutivos-de-tu-web');
        break;

      case "Soporte y mantenimiento":
        this.menuService.queHacemosIsActive = true;
        this.menuService.soporteYMantenimientoIsActive = true;
        this.router.navigateByUrl('soporte-y-mantenimiento');
        break;

      case "Portafolio":
        this.menuService.portafolioIsActive = true;
        this.router.navigateByUrl('portafolio');
        break;

      case "Blog":
        this.menuService.blogIsActive = true;
        this.router.navigateByUrl('blog');
        break;

      case "Contacto":
        this.menuService.contactoIsActive = true;
        this.router.navigateByUrl('contacto');
        break;

      default:
        break;
    }

  }


}
