import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DominioPersonalizadoComponent } from './component/dominio-personalizado.component';

const routes: Routes = [
  { path: '', component: DominioPersonalizadoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DominioPersonalizadoRoutingModule { }
