import { Pipe, PipeTransform } from '@angular/core';
import { formatPrefix } from 'd3-format';

@Pipe({
  name: 'formatPrefix'
})
export class FormatPrefixPipe implements PipeTransform {

  transform(value: string, specifier = ',.0'): any {
    return formatPrefix(specifier, 1e3)(value);
  }

}
