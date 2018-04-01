import { Pipe, PipeTransform, Inject, InjectionToken } from '@angular/core';
import { symbol, Symbol, SymbolType, symbolTriangle } from 'd3-shape';

/** InjectionToken for SymbolPipe that can be used to override default color array. */
export const NGVZ_DEFAULT_SHAPE = new InjectionToken<SymbolType>('NGVZ_DEFAULT_SHAPE');

/** Provider for NGVZ_DEFAULT_SHAPE injection token. */
export const NGVZ_DEFAULT_SHAPE_PROVIDER = { provide: NGVZ_DEFAULT_SHAPE, useValue: symbolTriangle };

@Pipe({
  name: 'symbol'
})
export class SymbolPipe implements PipeTransform {
  symbol: Symbol<any, any>;

  constructor(@Inject(NGVZ_DEFAULT_SHAPE) private defaultSymbolType: SymbolType) {
    this.symbol = symbol();
  }

  transform(value: Coordinates, symbolType: SymbolType = this.defaultSymbolType, size: number | ((any) => number) = 64): string {
    return this.symbol.type(symbolType).size(size as any)(value);
  }
}

export interface Coordinates {
  x: number;
  y: number;
}
