import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-title',
  templateUrl: './light-title.component.html',
  styleUrls: ['./light-title.component.scss']
})
export class LightTitleComponent {

  @Input()
  lightTitle!: any;
}
