import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[ngvzTransform]'
})
export class TransformDirective implements OnChanges {
  @Input() translateX: string;
  @Input() translateY: string;
  @Input() rotate: string;
  @Input() translate: number[];
  @HostBinding('attr.transform') transform: string;

  ngOnChanges() {
    this.transform = '';
    if (this.rotate) {
      this.transform += `rotate(${this.rotate})`;
    }
    if (this.translate) {
      this.transform += `translate(${this.translate[0]}, ${this.translate[1]})`;
    } else {
      this.transform += `translate(${this.translateX || 0}, ${this.translateY || 0})`;
    }

  }
}
