import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngvzTransform]'
})
export class TransformDirective implements OnInit {

  @Input() translateX: string;
  @Input() translateY: string;
  @Input() rotate: string;
  @Input() translate: number[];


  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    let attributeValue = '';

    if (this.translate) {
      attributeValue = `translate(${this.translate[0]}, ${this.translate[1]})`;
    } else if (this.rotate) {
      attributeValue = `rotate(${this.rotate})`;
    } else {
      attributeValue = `translate(${this.translateX || 0}, ${this.translateY || 0})`;
    }

    this.renderer.setElementAttribute(this.el.nativeElement, 'transform', attributeValue);
  }

}
