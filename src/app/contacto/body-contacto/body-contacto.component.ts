import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import tajeJson from '../../../../tape-variables.json';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
emailjs.init('TyoE7T9SkVJ0AbwpL');

@Component({
  selector: 'app-body-contacto',
  templateUrl: './body-contacto.component.html',
  styleUrls: ['./body-contacto.component.scss']
})
export class BodyContactoComponent {
  @ViewChild("contentD") modalContentD!: TemplateRef<any>;
  @ViewChild("contentM") modalContentM!: TemplateRef<any>;

  tape: any = tajeJson;
  contactoForm!: FormGroup;
  isSubmited = false;
  private modalService = inject(NgbModal);


  constructor() { }
  get name() {
    return this.contactoForm.get('name');
  }
  get lastName() {
    return this.contactoForm.get('lastName');
  }
  get email() {
    return this.contactoForm.get('email');
  }
  get phone() {
    return this.contactoForm.get('phone');
  }
  get description() {
    return this.contactoForm.get('description');
  }

  ngOnInit() {

    this.contactoForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{8}')]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }


  contacto(contactoForm: FormGroup) {
    this.isSubmited = true;
    if (contactoForm.valid) {
      const templateParams = {
        to_name: contactoForm.value.name,
        to_lastName: contactoForm.value.lastName,
        to_email: contactoForm.value.email,
        to_phone: contactoForm.value.phone,
        subject: 'Crea tu página con Raúl Lora',
        message: contactoForm.value.description
      };

      emailjs.send('service_6ollxy4', 'template_0p6ioqg', templateParams)
        .then(function (response) {
          console.log('Email sent successfully:', response.status, response.text);
        }, function (error) {
          console.error('Error sending email:', error);
        });

      if (window.screen.width > 992) {
        this.openVerticallyCentered(this.modalContentD);

      } else {
        console.log(window.screen.width);
        this.openFullscreen(this.modalContentM);
      }
      contactoForm.reset();
    }

  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  openFullscreen(content: TemplateRef<any>) {
    this.modalService.open(content, { fullscreen: true });
  }
}
