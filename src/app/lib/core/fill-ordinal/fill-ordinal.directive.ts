import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';
import { ColorScalePipe } from '../color-scale/color-scale.pipe';

@Directive({
  selector: '[ngvzFillOrdinal]'
})
export class FillOrdinalDirective implements OnInit {

  @Input('ngvzFillOrdinal') ngvzFillOrdinal: string;
  @Input() colors: string[];

  constructor(private el: ElementRef, private renderer: Renderer, private colorScalePipe: ColorScalePipe) { }

  ngOnInit() {
    this.renderer.setElementStyle(this.el.nativeElement, 'fill', this.colorScalePipe.transform(this.ngvzFillOrdinal, this.colors));
  }

}
