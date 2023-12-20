import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightTitleRoutingModule } from './light-title-routing.module';
import { LightTitleComponent } from './component/light-title.component';


@NgModule({
  declarations: [
    LightTitleComponent
  ],
  imports: [
    CommonModule,
    LightTitleRoutingModule
  ],
  exports:[LightTitleComponent]
})
export class LightTitleModule { }
