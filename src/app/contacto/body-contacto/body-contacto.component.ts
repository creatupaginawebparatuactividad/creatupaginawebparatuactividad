import { Component } from '@angular/core';
import tajeJson from '../../../../tape-variables.json';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body-contacto',
  templateUrl: './body-contacto.component.html',
  styleUrls: ['./body-contacto.component.scss']
})
export class BodyContactoComponent {
  tape: any = tajeJson;
  contactoForm!: FormGroup;
  isSubmited = false;

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
      phone: new FormControl('', [Validators.required, Validators.pattern('/^\d{10}$/')]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  contacto(contactoForm: FormGroup) {

  }
}
