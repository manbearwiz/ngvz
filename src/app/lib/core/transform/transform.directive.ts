import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ngvzTransform]'
})
export class TransformDirective implements OnInit {

  @Input() translateX: string;
  @Input() translateY: string;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'transform', `translate(${this.translateX || 0}, ${this.translateY || 0})`);
  }

}
