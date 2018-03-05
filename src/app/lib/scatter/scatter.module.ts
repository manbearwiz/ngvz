import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterComponent } from './scatter.component';
import { NgvzCoreModule } from '..';
import { SvgComponentsModule } from '../svg-components';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
    SvgComponentsModule,
  ],
  declarations: [ScatterComponent],
  exports: [ScatterComponent]
})
export class NgvzScatterModule { }
