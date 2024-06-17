import { Component } from '@angular/core';
import tajeJson from './../../../../tape-variables.json';

@Component({
  selector: 'app-body-portafolio',
  templateUrl: './body-portafolio.component.html',
  styleUrls: ['./body-portafolio.component.scss']
})
export class BodyPortafolioComponent {
  tape: any = tajeJson;
  portafolioMobile='assets/portafolio-card-m.png';
  portafolioDesktop='assets/portafolio-card-d.png';
  urlPortafolio='https://sites.google.com/view/raul-lora-gomez-portfolio/home?authuser=0';
}
