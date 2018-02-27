import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedBarComponent } from './stacked-bar.component';
import { NgvzCoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: [StackedBarComponent],
  exports: [StackedBarComponent]
})
export class NgvzStackedBarModule { }
