import { Component } from '@angular/core';
import tajeJson from '../../../../tape-variables.json';

@Component({
  selector: 'app-body-contacto',
  templateUrl: './body-contacto.component.html',
  styleUrls: ['./body-contacto.component.scss']
})
export class BodyContactoComponent {
  tape: any = tajeJson;
}
