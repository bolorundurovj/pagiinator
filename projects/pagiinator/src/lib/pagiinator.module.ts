import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagiinatorComponent } from './pagiinator.component';



@NgModule({
  declarations: [
    PagiinatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagiinatorComponent
  ]
})
export class PagiinatorModule { }
