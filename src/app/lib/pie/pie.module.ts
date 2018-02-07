import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie.component';
import { NgvzCoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: [PieComponent],
  exports: [PieComponent]
})
export class NgvzPieModule { }
