import { Component } from '@angular/core';
import tajeJson from '../../../../tape-variables.json';

@Component({
  selector: 'app-body-blog',
  templateUrl: './body-blog.component.html',
  styleUrls: ['./body-blog.component.scss']
})
export class BodyBlogComponent {
  tape: any = tajeJson;
}
