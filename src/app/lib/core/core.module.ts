import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformDirective } from './transform/transform.directive';
import { SplitPascalCaseDirective } from './split-pascal-case/split-pascal-case.directive';
import { ClipPathToDirective } from './clip-path-to/clip-path-to.directive';

const declarations = [
  TransformDirective,
  SplitPascalCaseDirective,
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
  SplitPascalCaseDirective,
  ClipPathToDirective,
};
