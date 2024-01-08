import { Component } from '@angular/core';
import tajeJson from './../../../../tape-variables.json';

@Component({
  selector: 'app-body-dominio-personalizado',
  templateUrl: './body-dominio-personalizado.component.html',
  styleUrls: ['./body-dominio-personalizado.component.scss']
})
export class BodyDominioPersonalizadoComponent {
  tape: any = tajeJson;

}
