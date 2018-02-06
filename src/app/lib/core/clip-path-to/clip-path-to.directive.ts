import { Directive, Input, ElementRef, Renderer, OnInit, OnChanges, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[ngvzClipPathTo]'
})
export class ClipPathToDirective implements AfterViewInit {

  @Input('ngvzClipPathTo') ngvzClipPathTo: SVGGraphicsElement;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'insertAdjacentHTML', [
      'beforebegin',
      `<clipPath id="clip-${this.ngvzClipPathTo.id}"><use href="#${this.ngvzClipPathTo.id}"></use></clipPath>`
    ]);

    this.renderer.setElementAttribute(this.el.nativeElement, 'clip-path', `url(#clip-${this.ngvzClipPathTo.id})`);
  }

}
