import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChordComponent } from './chord.component';
import { NgvzCoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: [ChordComponent],
  exports: [ChordComponent]
})
export class NgvzChordModule { }
