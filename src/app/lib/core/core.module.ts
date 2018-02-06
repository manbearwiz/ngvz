import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformDirective } from './transform/transform.directive';
import { SplitPascalCasePipe } from './split-pascal-case/split-pascal-case.pipe';
import { ClipPathToDirective } from './clip-path-to/clip-path-to.directive';

const declarations = [
  TransformDirective,
  SplitPascalCasePipe,
  ClipPathToDirective,
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
};
