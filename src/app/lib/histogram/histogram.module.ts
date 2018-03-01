import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistogramComponent } from './histogram.component';
import { NgvzCoreModule } from '../core';

@NgModule({
    imports: [
        CommonModule,
        NgvzCoreModule,
    ],
    declarations: [HistogramComponent],
    exports: [HistogramComponent]
})
export class NgvzHistogramModule { }
