import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformDirective } from './transform/transform.directive';
import { SplitPascalCasePipe } from './split-pascal-case/split-pascal-case.pipe';
import { ClipPathToDirective } from './clip-path-to/clip-path-to.directive';
import { ColorScalePipe } from './color-scale/color-scale.pipe';

const declarations = [
  TransformDirective,
  SplitPascalCasePipe,
  ClipPathToDirective,
  ColorScalePipe,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: declarations,
  exports: declarations,
})
export class NgvzCoreModule { }
export {
  TransformDirective,
  SplitPascalCasePipe,
  ClipPathToDirective,
  ColorScalePipe,
};
