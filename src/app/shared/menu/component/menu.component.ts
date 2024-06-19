import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {

  constructor(private router: Router, private menuService: MenuService) { }

  homeIsActive = false;
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

  ngAfterViewInit(): void {
    const tab = window.location.href.split("https://creatupaginawebparatuact-80022.web.app/");
    const page = tab[1]
    this.setMenuLinksStyle()
    this.navigateToPageSelected(page);
  }

  setMenuLinksStyleSelected(event: Event) {
    const menuLinkNodeSelectedId = (event.currentTarget as HTMLElement).id;
    this.navigateToPageSelected(menuLinkNodeSelectedId);
    return true;
  }

  setMenuLinksStyle() {
    this.homeIsActive = false;
    this.quienesSomosIsActive = false;
    this.queHacemosIsActive = false;
    this.tuPaginaWebIsActive = false;
    this.seoPosicionamosTuWebIsActive = false;
    this.dominioPersonalizadoIsActive = false;
    this.evolutivosDeTuWebIsActive = false;
    this.soporteYMantenimientoIsActive = false;
    this.portafolioIsActive = false;
    this.blogIsActive = false;
    this.contactoIsActive = false;
  }

  navigateToPageSelected(idPage: String) {
    switch (idPage) {
      case "":
        this.homeIsActive = true;
        this.router.navigateByUrl('');
        break;

      case "quienes-somos":
        this.quienesSomosIsActive = true;
        this.router.navigateByUrl('quienes-somos');
        break;

      case "que-hacemos":
        this.queHacemosIsActive = true;
        break;

      case "tu-pagina-web-a-medida":
        this.queHacemosIsActive = true;
        this.tuPaginaWebIsActive = true;
        this.router.navigateByUrl('tu-pagina-web-a-medida');
        break;

      case "seo-posicionamos-tu-web":
        this.queHacemosIsActive = true;
        this.seoPosicionamosTuWebIsActive = true;
        this.router.navigateByUrl('seo-posicionamos-tu-web');

        break;

      case "dominio-personalizado":
        this.queHacemosIsActive = true;
        this.dominioPersonalizadoIsActive = true;
        this.router.navigateByUrl('dominio-personalizado');
        break;

      case "evolutivos-de-tu-web":
        this.queHacemosIsActive = true;
        this.evolutivosDeTuWebIsActive = true;
        this.router.navigateByUrl('evolutivos-de-tu-web');
        break;

      case "soporte-y-mantenimiento":
        this.queHacemosIsActive = true;
        this.soporteYMantenimientoIsActive = true;
        this.router.navigateByUrl('soporte-y-mantenimiento');
        break;

      case "portafolio":
        this.portafolioIsActive = true;
        this.router.navigateByUrl('portafolio');
        break;

      case "blog":
        this.blogIsActive = true;
        this.router.navigateByUrl('blog');
        break;

      case "contacto":
        this.contactoIsActive = true;
        this.router.navigateByUrl('contacto');
        break;

      default:
        break;
    }
  }

}
