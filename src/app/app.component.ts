import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'creatupaginawebparatuactividad';

  constructor(private meta: Meta) { }
  
  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'Este es un artículo sobre optimización SEO en Angular.' });
    this.meta.addTag({ name: 'keywords', content: 'Angular, SEO, meta etiquetas, optimización' });
  }
}
