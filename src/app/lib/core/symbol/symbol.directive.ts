import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { SymbolPipe, Coordinates } from './symbol.pipe';
import { SymbolType } from 'd3-shape';

@Directive({
  selector: '[ngvzSymbol]'
})
export class SymbolDirective implements OnChanges {
  @Input() ngvzSymbol: Coordinates;
  @Input() symbolType: SymbolType;
  @HostBinding('attr.d') d: string;

  constructor(private symbolPipe: SymbolPipe) { }

  ngOnChanges() {
    this.d = this.symbolPipe.transform(this.ngvzSymbol, this.symbolType);
  }
}
