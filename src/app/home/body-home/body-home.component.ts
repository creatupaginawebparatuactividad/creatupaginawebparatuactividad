import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import tajeJson from '../../../../tape-variables.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.scss'],
})
export class BodyHomeComponent {
  constructor(private router: Router) { }
  @ViewChild("contentDe") modalContentDe!: TemplateRef<any>;
  @ViewChild("contentMe") modalContentMe!: TemplateRef<any>;
  private modalService = inject(NgbModal);
  tape: any = tajeJson;

  ngAfterViewInit(): void {
    if (!sessionStorage.getItem('cookies')) {
      sessionStorage.setItem("cookies", "yes");
    }
    if (sessionStorage.getItem('cookies') === 'yes') {
      if (window.screen.width > 992) {
        this.open(this.modalContentDe);

      } else {
        this.open(this.modalContentMe);
      }
    }
  }

  navigateToContacto() {
    this.router.navigateByUrl('contacto');
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }

  close() {
    this.modalService.dismissAll();
    sessionStorage.setItem("cookies", "no");
  }
}
