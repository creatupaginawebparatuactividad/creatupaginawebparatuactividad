import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopBodyHeaderRoutingModule } from './desktop-body-header-routing.module';
import { DesktopBodyHeaderComponent } from './component/desktop-body-header.component';


@NgModule({
  declarations: [DesktopBodyHeaderComponent],
  imports: [
    CommonModule,
    DesktopBodyHeaderRoutingModule
  ],
  exports:[DesktopBodyHeaderComponent]
})
export class DesktopBodyHeaderModule { }
