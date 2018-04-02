import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { scaleBand, scaleLinear, scaleOrdinal, ScaleLinear, ScaleBand } from 'd3-scale';
import { StackedBarData } from '../stacked-bar/stacked-bar.component';
import { schemeYlOrBr } from 'd3-scale-chromatic';

@Component({
  selector: 'ngvz-grouped-bar',
  templateUrl: './grouped-bar.component.html',
  styleUrls: ['./grouped-bar.component.scss']
})
export class GroupedBarComponent implements OnChanges {
  colors: any;
  keys: string[];
  x1: ScaleBand<string>;
  x0: ScaleBand<string>;
  y: ScaleLinear<number, number>;
  @Input() width: number;
  @Input() height: number;
  @Input() data: StackedBarData[];
  @Input() margin = { top: 20, right: 20, bottom: 30, left: 40 };

  innerHeight: number;
  innerWidth: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.width || !this.height || !this.data) {
      return;
    }

    this.innerWidth = this.width - this.margin.left - this.margin.right;
    this.innerHeight = this.height - this.margin.top - this.margin.bottom;

    this.x0 = scaleBand()
      .rangeRound([0, this.innerWidth])
      .paddingInner(0.1)
      .domain(this.data.map(d => d.name));

    this.keys = Array.from(this.data[0].values.keys());

    this.x1 = scaleBand()
      .padding(0.05)
      .domain(this.keys)
      .rangeRound([0, this.x0.bandwidth()]);

    const maxDomain = Math.max(...this.data.map(d => Math.max(...Array.from(d.values.values()))));

    this.y = scaleLinear()
      .rangeRound([this.innerHeight, 0])
      .domain([0, maxDomain])
      .nice();

    this.colors = schemeYlOrBr[this.keys.length];
  }
}
