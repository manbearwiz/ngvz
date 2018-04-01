import { Component, OnInit, Input, OnChanges, Directive, QueryList, ContentChildren, ContentChild, AfterContentInit, ViewChild, TemplateRef } from '@angular/core';
import { ScaleLinear, ScaleBand, scaleLinear } from 'd3-scale';

function isScaleLinear(scale: ScaleLinear<number, number> | ScaleBand<string>): scale is ScaleLinear<number, number> {
  return (<ScaleLinear<number, number>>scale).ticks !== undefined;
}

@Directive({
  selector: '[ngvzTick]',
})
export class NgvzTickDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: '[ngvz-axis]',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.scss']
})
export class AxisComponent implements OnChanges {
  ticks: string[] | number[];
  @Input() scale: ScaleLinear<number, number> | ScaleBand<string>;
  @Input() position: AxisPosition;
  @Input() tickSizeOuter = 6;
  @Input() tickSizeInner = 6;
  @Input() tickPadding = 3;
  @Input() tickOffset = 0;

  @ContentChild(NgvzTickDirective) tickDirective: NgvzTickDirective;

  domainPath: string;
  spacing: number;
  k: number;
  vertical: boolean;

  ngOnChanges() {
    this.k = this.position === 'top' || this.position === 'left' ? -1 : 1;
    this.spacing = Math.max(this.tickSizeInner, 0) + this.tickPadding;
    this.vertical = this.position === 'left' || this.position === 'right';
    const range = this.scale.range();
    const range0 = +range[0] + 0.5;
    const range1 = +range[range.length - 1] + 0.5;

    this.domainPath = this.vertical
      ? 'M' + this.k * this.tickSizeOuter + ',' + range0 + 'H0.5V' + range1 + 'H' + this.k * this.tickSizeOuter
      : 'M' + range0 + ',' + this.k * this.tickSizeOuter + 'V0.5H' + range1 + 'V' + this.k * this.tickSizeOuter;

    this.ticks = isScaleLinear(this.scale) ? this.scale.ticks() : this.scale.domain();
  }
}

export type AxisPosition = 'top' | 'bottom' | 'left' | 'right';
