import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadialTreeComponent } from './radial-tree.component';
import { NgvzCoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: [RadialTreeComponent],
  exports: [RadialTreeComponent]
})
export class NgvzRadialTreeModule { }
