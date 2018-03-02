import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunburstComponent } from './sunburst.component';
import { NgvzCoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: [SunburstComponent],
  exports: [SunburstComponent]
})
export class NgvzSunburstModule { }
