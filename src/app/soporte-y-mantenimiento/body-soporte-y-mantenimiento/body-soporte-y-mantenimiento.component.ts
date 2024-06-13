import { Component } from '@angular/core';
import tajeJson from '../../../../tape-variables.json';

@Component({
  selector: 'app-body-soporte-y-mantenimiento',
  templateUrl: './body-soporte-y-mantenimiento.component.html',
  styleUrls: ['./body-soporte-y-mantenimiento.component.scss']
})
export class BodySoporteYMantenimientoComponent {
  tape: any = tajeJson;
}
