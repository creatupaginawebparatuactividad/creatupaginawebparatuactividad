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
    this.meta.addTag({ name: 'keywords', content: 'Seo web con Raul Lora, Pagina web con Raul Lora, Desarrollo web con Raul Lora, Crea tu pagina con Raul Lora' });
  }
}
