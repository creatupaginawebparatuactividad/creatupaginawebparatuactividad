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
    this.meta.addTag({ name: 'description', content: 'Creamos páginas web para empresas.' });
    this.meta.addTag({ name: 'keywords', content: 'Web para empresas, Lora Gómez, Web Lora, Crea tu web con Lora' });
    this.titleService.setTitle('Tu web con Seo');
  }
}
