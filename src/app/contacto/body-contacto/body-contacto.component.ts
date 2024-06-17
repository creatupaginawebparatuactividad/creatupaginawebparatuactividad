import { Component } from '@angular/core';
import tajeJson from '../../../../tape-variables.json';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
emailjs.init('TyoE7T9SkVJ0AbwpL');

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

    // const to = 'lgraul87@gmail.com';
    // const subject = 'Crea tu página con Raúl Lora';
    // const message = ''
    //   + '\nNombre: ' + contactoForm.value.name
    //   + '\nApellidos: ' + contactoForm.value.lastName
    //   + '\nCorreo: ' + contactoForm.value.email
    //   + '\nTeléfono: ' + contactoForm.value.phone
    //   + '\nDescripción: ' + contactoForm.value.description;

    // Datos de tu plantilla de EmailJS
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
        alert('Email sent successfully!');
      }, function (error) {
        console.error('Error sending email:', error);
        alert('Error sending email: ' + error.text);
      });
  }
}
