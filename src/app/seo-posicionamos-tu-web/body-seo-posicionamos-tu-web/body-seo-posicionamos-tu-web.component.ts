import { Component } from '@angular/core';
import tajeJson from './../../../../tape-variables.json';

@Component({
  selector: 'app-body-seo-posicionamos-tu-web',
  templateUrl: './body-seo-posicionamos-tu-web.component.html',
  styleUrls: ['./body-seo-posicionamos-tu-web.component.scss']
})
export class BodySeoPosicionamosTuWebComponent {
  tape: any = tajeJson;

}
