import { Component } from '@angular/core';
import tajeJson from './../../../../tape-variables.json';

@Component({
  selector: 'app-body-evolutivos-de-tu-web',
  templateUrl: './body-evolutivos-de-tu-web.component.html',
  styleUrls: ['./body-evolutivos-de-tu-web.component.scss']
})
export class BodyEvolutivosDeTuWebComponent {
  tape: any = tajeJson;

}
