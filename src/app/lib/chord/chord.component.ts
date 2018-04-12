import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { chord, ribbon, RibbonGenerator, ChordLayout, Ribbon, RibbonSubgroup, Chords, ChordGroup } from 'd3-chord';
import { range, descending } from 'd3-array';
import { scaleOrdinal, ScaleOrdinal } from 'd3-scale';
import { arc, Arc, DefaultArcObject } from 'd3-shape';

@Component({
  selector: 'ngvz-chord',
  templateUrl: './chord.component.html',
  styleUrls: ['./chord.component.scss']
})
export class ChordComponent implements OnChanges {
  @Input() colors = ['#000000', '#FFDD89', '#957244', '#F26223'];
  @Input() width: number;
  @Input() height: number;
  @Input() data: number[][];

  innerRadius: number;
  outerRadius: number;
  chords: Chords;
  arc: Arc<any, DefaultArcObject>;
  ribbon: RibbonGenerator<any, Ribbon, RibbonSubgroup>;
  chordLayout: ChordLayout = chord()
    .padAngle(0.05)
    .sortSubgroups(descending);

  Math = Math;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.width || !this.height || !this.data) {
      return;
    }

    this.outerRadius = Math.min(this.width, this.height) * 0.5 - 40;
    this.innerRadius = this.outerRadius - 30;

    this.arc = arc()
      .innerRadius(this.innerRadius)
      .outerRadius(this.outerRadius);

    this.ribbon = ribbon()
      .radius(this.innerRadius);

    this.chords = this.chordLayout(this.data);
  }

  // Returns an array of tick angles and values for a given group and step.
  groupTicks(d: ChordGroup) {
    const k = (d.endAngle - d.startAngle) / d.value;
    return range(0, d.value, 1e3).map(value => ({ value: value, angle: value * k + d.startAngle }));
  }
}
