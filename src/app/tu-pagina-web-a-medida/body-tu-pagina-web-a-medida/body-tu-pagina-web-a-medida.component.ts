import { Component } from '@angular/core';
import lightTitleJson from './../../../../light-title-variables.json';

@Component({
  selector: 'app-body-tu-pagina-web-a-medida',
  templateUrl: './body-tu-pagina-web-a-medida.component.html',
  styleUrls: ['./body-tu-pagina-web-a-medida.component.scss'],
})
export class BodyTuPaginaWebAMedidaComponent {
  lightTitle: any = lightTitleJson;
}
