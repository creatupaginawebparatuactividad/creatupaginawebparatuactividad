import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericIonModuleComponent } from './component/generic-ion-module.component';

const routes: Routes = [
  { path: '', component: GenericIonModuleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericIonMenuRoutingModule { }
