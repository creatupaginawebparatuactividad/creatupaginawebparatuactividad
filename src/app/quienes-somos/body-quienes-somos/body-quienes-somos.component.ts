import { Component } from '@angular/core';
import tajeJson from './../../../../tape-variables.json';
import lightTitleJson from './../../../../light-title-variables.json';

@Component({
  selector: 'app-body-quienes-somos',
  templateUrl: './body-quienes-somos.component.html',
  styleUrls: ['./body-quienes-somos.component.scss']
})
export class BodyQuienesSomosComponent {
  tape: any = tajeJson;
  lightTitle: any = lightTitleJson;
}
