import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileFooterRoutingModule } from './mobile-footer-routing.module';
import { MobileFooterComponent } from './component/mobile-footer.component';


@NgModule({
  declarations: [MobileFooterComponent],
  imports: [
    CommonModule,
    MobileFooterRoutingModule
  ],
  exports: [MobileFooterComponent]
})
export class MobileFooterModule { }
