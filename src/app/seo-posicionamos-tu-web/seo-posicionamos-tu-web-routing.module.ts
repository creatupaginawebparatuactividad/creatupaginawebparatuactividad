import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoPosicionamosTuWebComponent } from './component/seo-posicionamos-tu-web.component';

const routes: Routes = [
  { path: '', component: SeoPosicionamosTuWebComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoPosicionamosTuWebRoutingModule { }
