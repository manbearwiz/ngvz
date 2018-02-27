import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { scaleLinear, scaleBand, ScaleBand, ScaleLinear } from 'd3-scale';
import { stack, Series } from 'd3-shape';
import { schemeYlOrBr } from 'd3-scale-chromatic';

@Component({
  selector: 'ngvz-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.scss']
})
export class StackedBarComponent implements OnChanges {

  colors: ReadonlyArray<string>;
  x: ScaleBand<string>;
  y: ScaleLinear<number, number>;
  stack: Series<{ [key: string]: number; }, string>[];
  model: StackedBarData[];
  @Input() width: number;
  @Input() height: number;
  @Input() data: StackedBarData[];

  ngOnChanges() {
    if (!this.width || !this.height || !this.data) {
      return;
    }

    const margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = this.width - margin.left - margin.right,
      height = this.height - margin.top - margin.bottom;

    this.model = this.data.map(d => ({
      ...d,
      total: Array
        .from(d.values.values())
        .reduce((prev, curr) => prev + curr, 0)
    })).sort((a, b) => b.total - a.total);

    this.x = scaleBand()
      .rangeRound([0, width])
      .paddingInner(0.05)
      .align(0.1)
      .domain(this.model.map(m => m.name));

    this.y = scaleLinear()
      .rangeRound([height, 0])
      .domain([0, this.model[0].total])
      .nice();

    const keys = Array.from(this.model[0].values.keys());

    this.stack = stack().keys(keys)(this.model.map(m =>
      Array.from(m.values)
        .reduce((obj, [key, value]) => (
          { ...obj, [key]: value }
        ), { State: m.name, total: m.total } as any)));

    this.colors = schemeYlOrBr[this.stack.length];
  }
}

export interface StackedBarData {
  name: string;
  values: Map<string, number>;
  total?: number;
}
