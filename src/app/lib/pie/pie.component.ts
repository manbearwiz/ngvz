import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { pie, arc, PieArcDatum, Arc, DefaultArcObject } from 'd3-shape';

@Component({
  selector: 'ngvz-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnChanges {

  label: (d: DefaultArcObject, ...args: any[]) => [number, number];
  path: Arc<any, DefaultArcObject>;
  radius: number;
  output: PieArcDatum<Datum>[];

  @Input() data: Datum[];
  @Input() width: number;
  @Input() height: number;
  @Input() outerPadding = 10;
  @Input() innerPadding = 100;

  constructor() { }

  ngOnChanges() {
    if (!this.width || !this.height || !this.data) {
      return;
    }

    this.radius = Math.min(this.width, this.height) / 2;

    const pieBuilder = pie<Datum>()
      .sort(null)
      .value(d => d.value);

    this.path = arc()
      .outerRadius(this.radius - this.outerPadding)
      .innerRadius(this.radius - this.innerPadding);

    this.label = arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40)
      .centroid;

    this.output = pieBuilder(this.data);
  }

}

export interface Datum {
  id: string;
  value: number;
}

