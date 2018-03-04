import { Directive, Input, HostBinding, OnChanges, OnInit } from '@angular/core';
import { ColorScalePipe } from '../color-scale/color-scale.pipe';

@Directive({
  selector: '[ngvzFillOrdinal]'
})
export class FillOrdinalDirective implements OnInit {
  @Input() ngvzFillOrdinal: string;
  @Input() colors: string[];
  @HostBinding('style.fill') fill: string;

  constructor(private colorScalePipe: ColorScalePipe) { }

  ngOnInit() {
    this.fill = this.colorScalePipe.transform(this.ngvzFillOrdinal, this.colors);
  }
}
