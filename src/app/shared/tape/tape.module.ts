import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TapeRoutingModule } from './tape-routing.module';
import { TapeComponent } from './component/tape.component';


@NgModule({
  declarations: [
    TapeComponent
  ],
  imports: [
    CommonModule,
    TapeRoutingModule
  ],
  exports:[TapeComponent]
})
export class TapeModule { }
