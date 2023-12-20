import { Component } from '@angular/core';
import { Router } from '@angular/router';
import tajeJson from './../../../../tape-variables.json';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  constructor(private router: Router) {}
  tape: any = tajeJson;

  navigateToContacto() {
    this.router.navigateByUrl('contacto');
  }
}
