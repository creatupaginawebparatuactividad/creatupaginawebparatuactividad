import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import tajeJson from './../../../../tape-variables.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  constructor(private router: Router) { }
  @ViewChild("contentD") modalContentD!: TemplateRef<any>;
  @ViewChild("contentM") modalContentM!: TemplateRef<any>;
  private modalService = inject(NgbModal);
  tape: any = tajeJson;

  ngAfterViewInit(): void {
    if (!sessionStorage.getItem('cookies')) {
      sessionStorage.setItem("cookies", "yes");
    }
    if (sessionStorage.getItem('cookies') === 'yes') {
      sessionStorage.setItem("cookies", "no");
      if (window.screen.width > 992) {
        this.openVerticallyCentered(this.modalContentD);

      } else {
        this.openVerticallyCentered(this.modalContentM);
      }

    }

  }

  navigateToContacto() {
    this.router.navigateByUrl('contacto');
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content);
  }
}
