import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupedBarComponent } from './grouped-bar.component';
import { NgvzCoreModule } from '../core';
import { SvgComponentsModule } from '../svg-components';

@NgModule({
  imports: [
    CommonModule,
    NgvzCoreModule,
    SvgComponentsModule,
  ],
  declarations: [GroupedBarComponent],
  exports: [GroupedBarComponent]
})
export class NgvzGroupedBarModule { }
