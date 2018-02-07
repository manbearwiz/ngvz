import { Pipe, PipeTransform } from '@angular/core';
import { scaleOrdinal, ScaleOrdinal } from 'd3-scale';
import { schemePastel1 } from 'd3-scale-chromatic';

@Pipe({
  name: 'colorScale'
})
export class ColorScalePipe implements PipeTransform {

  scale: ScaleOrdinal<string, string>;

  constructor() {
    this.scale = scaleOrdinal([...schemePastel1  ]);
  }

  transform(value: string, args?: any): string {
    return this.scale(value);
  }

}

