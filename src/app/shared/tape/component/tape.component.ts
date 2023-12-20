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

  /*"Nos dedicamos al software, nos dedicamos a ti.<br><br> Queremos darte lo que quieres y lo que necesitas. Para ello contamos con la experiencia de
  los mejores profesionales, con la máxima dedicación y compromiso, con el fin de que termines
  con una página web que impulse tus ventas y llegues a lo mas alto.
  <br><br>
  Siempre tendrás la voz, nos enfocamos en ti"
  */
}
