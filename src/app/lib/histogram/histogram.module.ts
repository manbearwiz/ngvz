import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistogramComponent } from './histogram.component';
import { NgvzCoreModule } from '../core';
import { SvgComponentsModule } from '../svg-components';

@NgModule({
    imports: [
        CommonModule,
        NgvzCoreModule,
        SvgComponentsModule,
    ],
    declarations: [HistogramComponent],
    exports: [HistogramComponent]
})
export class NgvzHistogramModule { }
