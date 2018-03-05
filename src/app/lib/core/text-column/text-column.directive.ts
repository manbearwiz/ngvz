import { Directive, Input, AfterViewInit, ElementRef, Renderer, OnChanges } from '@angular/core';

@Directive({
  selector: '[ngvzTextColumn]'
})
export class TextColumnDirective implements OnChanges {
  @Input() ngvzTextColumn: string[];

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnChanges() {
    this.ngvzTextColumn.forEach((text, i) => {
      this.renderer.invokeElementMethod(this.el.nativeElement, 'insertAdjacentHTML', [
        'afterbegin',
        `<tspan x="0" y="${13 + (i - this.ngvzTextColumn.length / 2 - 0.5) * 10}">${text}</tspan>`
      ]);
    });
  }
}
