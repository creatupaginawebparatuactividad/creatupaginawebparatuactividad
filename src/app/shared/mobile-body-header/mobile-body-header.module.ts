import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileBodyHeaderRoutingModule } from './mobile-body-header-routing.module';
import { MobileBodyHeaderComponent } from './component/mobile-body-header.component';


@NgModule({
  declarations: [MobileBodyHeaderComponent],
  imports: [
    CommonModule,
    MobileBodyHeaderRoutingModule
  ],
  exports:[MobileBodyHeaderComponent]
})
export class MobileBodyHeaderModule { }
