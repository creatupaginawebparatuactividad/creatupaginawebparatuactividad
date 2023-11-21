import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoporteYMantenimientoComponent } from './component/soporte-y-mantenimiento.component';

const routes: Routes = [
  { path: '', component: SoporteYMantenimientoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoporteYMantenimientoRoutingModule { }
