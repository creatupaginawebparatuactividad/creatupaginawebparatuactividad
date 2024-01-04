import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-body-header',
  templateUrl: './mobile-body-header.component.html',
  styleUrls: ['./mobile-body-header.component.scss'],
})
export class MobileBodyHeaderComponent {
  @Input()
  title = '';

  @Input()
  image = '';
  constructor() {}
}
