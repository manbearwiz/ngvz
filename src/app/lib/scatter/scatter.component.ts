import { Component, Input, OnChanges } from '@angular/core';
import { scaleLinear, ScaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { Symbol, symbolCross } from 'd3-shape';

@Component({
  selector: 'ngvz-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent implements OnChanges {
  @Input() width: number;
  @Input() height: number;
  @Input() data: Coordinates[];
  @Input() margin = { top: 20, right: 20, bottom: 30, left: 40 };
  @Input() symbolType = symbolCross;

  y: ScaleLinear<number, number>;
  x: ScaleLinear<number, number>;
  innerHeight: number;
  innerWidth: number;

  ngOnChanges() {
    this.innerWidth = this.width - this.margin.left - this.margin.right;
    this.innerHeight = this.height - this.margin.top - this.margin.bottom;

    this.x = scaleLinear()
      .range([0, this.innerWidth])
      .domain(extent(this.data, d => d.x))
      .nice();

    this.y = scaleLinear()
      .range([this.innerHeight, 0])
      .domain(extent(this.data, d => d.y))
      .nice();
  }
}
