import { Pipe, PipeTransform, InjectionToken, Optional, Inject } from '@angular/core';
import { scaleOrdinal, ScaleOrdinal } from 'd3-scale';
import { schemeSet3 } from 'd3-scale-chromatic';

/** InjectionToken for ColorScalePipe that can be used to override default color array. */
export const NGVZ_ORDINAL_COLORS = new InjectionToken<string[]>('NGVZ_ORDINAL_COLORS');

/** Provider for NGVZ_ORDINAL_COLORS injection token. */
export const NGVZ_ORDINAL_COLORS_PROVIDER = { provide: NGVZ_ORDINAL_COLORS, useValue: [...schemeSet3] };

@Pipe({
  name: 'colorScale'
})
export class ColorScalePipe implements PipeTransform {

  scale: ScaleOrdinal<string, string>;

  constructor(@Inject(NGVZ_ORDINAL_COLORS) private defaultColors: string[]) {
    this.scale = scaleOrdinal();
  }

  transform(value: string, colors: string[] = this.defaultColors): string {
    this.scale.range(colors);
    return this.scale(value);
  }

}

