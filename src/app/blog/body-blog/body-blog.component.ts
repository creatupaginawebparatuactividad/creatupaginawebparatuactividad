import { Component } from '@angular/core';
import tajeJson from '../../../../tape-variables.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-blog',
  templateUrl: './body-blog.component.html',
  styleUrls: ['./body-blog.component.scss']
})
export class BodyBlogComponent {
  tape: any = tajeJson;
  blogMobile = 'assets/blog-card-m.png';
  blogDesktop = 'assets/blog-card-d.png';

  constructor(private router: Router) {}

  navigateToBlog() {
    this.router.navigateByUrl('');
  }
}
