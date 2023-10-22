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
    this.meta.addTag({ name: 'description', content: 'Creamos paginas web para empresas.' });
    this.meta.addTag({ name: 'keywords', content: 'Creamos tu web Lora Gomez' });
    this.titleService.setTitle('Creamos tu web');
  }
}
