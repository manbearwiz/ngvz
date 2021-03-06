import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformDirective } from './transform/transform.directive';
import { SplitPascalCasePipe } from './split-pascal-case/split-pascal-case.pipe';
import { ClipPathToDirective } from './clip-path-to/clip-path-to.directive';
import { ColorScalePipe, NGVZ_ORDINAL_COLORS_PROVIDER } from './color-scale/color-scale.pipe';
import { FillOrdinalDirective } from './fill-ordinal/fill-ordinal.directive';

const declarations = [
  TransformDirective,
  SplitPascalCasePipe,
  ClipPathToDirective,
  ColorScalePipe,
  FillOrdinalDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ColorScalePipe,
    NGVZ_ORDINAL_COLORS_PROVIDER
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
  FillOrdinalDirective
};
