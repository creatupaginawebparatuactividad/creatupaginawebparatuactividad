import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvolutivosDeTuWebComponent } from './component/evolutivos-de-tu-web.component';

const routes: Routes = [
  { path: '', component: EvolutivosDeTuWebComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvolutivosDeTuWebRoutingModule { }
