import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreePipe } from './degrees/degree.pipe';
import { Utf8CorrectionPipe } from './utf8Codification/utf8-correction.pipe';



@NgModule({
  declarations: [
    DegreePipe,
    Utf8CorrectionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DegreePipe,
    Utf8CorrectionPipe
  ]
})
export class PipesModule { }
