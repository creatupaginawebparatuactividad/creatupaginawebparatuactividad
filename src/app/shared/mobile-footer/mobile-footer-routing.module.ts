import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileFooterComponent } from './component/mobile-footer.component';

const routes: Routes = [
  { path: '', component: MobileFooterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileFooterRoutingModule { }
