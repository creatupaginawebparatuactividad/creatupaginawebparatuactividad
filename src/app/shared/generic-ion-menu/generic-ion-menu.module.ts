import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericIonMenuRoutingModule } from './generic-ion-menu-routing.module';
import { GenericIonModuleComponent } from './component/generic-ion-module.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    GenericIonModuleComponent
  ],
  imports: [
    CommonModule,
    GenericIonMenuRoutingModule,
    IonicModule
  ],
  exports:[GenericIonModuleComponent]
})
export class GenericIonMenuModule { }
