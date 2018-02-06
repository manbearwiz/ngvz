import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreemapComponent } from './treemap.component';
import { NgvzCoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: [TreemapComponent],
  exports: [TreemapComponent]
})
export class NgvzTreemapModule { }
