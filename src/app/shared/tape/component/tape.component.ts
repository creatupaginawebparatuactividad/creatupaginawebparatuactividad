import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.scss'],
})
export class TapeComponent {
  constructor(private router: Router) {}

  @Input()
  title!: string;

  @Input()
  firstDescription!: string;

  @Input()
  secondDescription!: string;

  @Input()
  thirdDescription!: string;

  @Input()
  textButton!: string;

  navigateToContacto() {
    this.router.navigateByUrl('contacto');
  }
}
