import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

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

  resetNavStyles() {
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
}
