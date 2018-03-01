import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { histogram } from 'd3-array';
import { scaleLinear, ScaleLinear } from 'd3-scale';

@Component({
  selector: 'ngvz-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnChanges {

  innerWidth: number;
  innerHeight: number;
  y: ScaleLinear<number, number>;
  x: ScaleLinear<number, number>;
  bins: number[][];
  @Input() data: number[];
  @Input() width: number;
  @Input() height: number;
  @Input() margin = { top: 10, right: 30, bottom: 30, left: 30 };

  ngOnChanges() {
    this.innerWidth = this.width - this.margin.left - this.margin.right;
    this.innerHeight = this.height - this.margin.top - this.margin.bottom;

    this.x = scaleLinear()
      .rangeRound([0, this.innerWidth]);

    this.bins = histogram()
      .domain(this.x.domain())
      .thresholds(this.x.ticks(20))
      (this.data);

    this.y = scaleLinear()
      .domain([0, this.bins.reduce((a, b) => a.length > b.length ? a : b).length])
      .range([this.innerHeight, 0]);
  }
}
