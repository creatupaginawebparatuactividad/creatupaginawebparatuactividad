import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'creatupaginawebparatuactividad';

  constructor(
    private meta: Meta,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Crea tu página web con Raúl Lora');
    this.meta.addTag({ name: 'description', content: 'Creamos páginas web para empresas y particulares. Te ofrecemos confianza y compromiso. Trabajamos para ti.' });
    this.meta.addTag(
      {
        name: 'keywords',
        content: 'Seo web con Raul Lora, Pagina web con Raul Lora, Desarrollo web con Raul Lora, Crea tu pagina con Raul Lora,'
          + 'Pagina web La Coruña, Pagina web Alava, Pagina web Albacete, Pagina web Alicante, '
          + 'Pagina web Almería, Pagina web Asturias, Pagina web Avila, Pagina web Badajoz, '
          + 'Pagina web Barcelona, Pagina web Burgos, Pagina web Cáceres, Pagina web Cádiz, '
          + 'Pagina web Cantabria, Pagina web Castellón, Pagina web Ceuta, Pagina web Ciudad Real, '
          + 'Pagina web Córdoba, Pagina web Cuenca, Pagina web Formentera, Pagina web Girona, '
          + 'Pagina web Granada, Pagina web Guadalajara, Pagina web Guipuzcoa, Pagina web Huelva, '
          + 'Pagina web Huesca, Pagina web Ibiza, Pagina web Jaén, Pagina web La Rioja, '
          + 'Pagina web Las Palmas de Gran Canaria, Pagina web Gran Canaria, Pagina web Fuerteventura, Pagina web Lanzarote, '
          + 'Pagina web León, Pagina web Lérida, Pagina web Lugo, Pagina web Madrid, Pagina web Málaga, '
          + 'Pagina web Mallorca, Pagina web Menorca, Pagina web Murcia, Pagina web Navarra, '
          + 'Pagina web Orense, Pagina web Palencia, Pagina web Pontevedra, Pagina web Salamanca, '
          + 'Pagina web Santa Cruz de Tenerife, Pagina web Tenerife, Pagina web La Gomera, Pagina web La Palma, '
          + 'Pagina web El Hierro, Pagina web Segovia, Pagina web Sevilla, Pagina web Soria, '
          + 'Pagina web Tarragona, Pagina web Teruel, Pagina web Toledo, Pagina web Valencia, '
          + 'Pagina web Valladolid, Pagina web Vizcaya, Pagina web Zamora, Pagina web Zaragoza'
      });


  }
}
