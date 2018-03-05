import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AxisComponent } from './axis/axis.component';
import { NgvzCoreModule } from '../core';

const declarations = [
  AxisComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
  ],
  declarations: declarations,
  exports: declarations
})
export class SvgComponentsModule { }
export {
  AxisComponent,
};
