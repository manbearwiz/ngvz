import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceDirectedComponent } from './force-directed.component';
import { NgvzCoreModule } from '../core';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: [ForceDirectedComponent],
  exports: [ForceDirectedComponent]
})
export class NgvzForceDirectedModule { }
