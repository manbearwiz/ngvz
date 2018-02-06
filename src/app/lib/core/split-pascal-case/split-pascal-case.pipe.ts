import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPascalCase'
})
export class SplitPascalCasePipe implements PipeTransform {

  transform(value: string, args?: any): string[] {
    if (!value) { return [String(value)]; }
    if (typeof value !== 'string') {
      throw new TypeError();
    }

    return value.split(/(?=[A-Z][^A-Z])/g);
  }

}
