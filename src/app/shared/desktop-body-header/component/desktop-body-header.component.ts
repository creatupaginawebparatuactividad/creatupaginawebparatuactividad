import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-body-header',
  templateUrl: './desktop-body-header.component.html',
  styleUrls: ['./desktop-body-header.component.scss'],
})
export class DesktopBodyHeaderComponent {
  
  @Input()
  image = '';

  @Input()
  title = '';

  @Input()
  firstDescription = '';

  @Input()
  secondDescription = '';

  @Input()
  thirdDescription = '';
}
