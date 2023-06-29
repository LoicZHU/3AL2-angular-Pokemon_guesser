import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolTransform',
})
export class BoolTransformPipe implements PipeTransform {
  transform(value: number): string {
    return value == 0 ? 'No' : 'Yes';
  }
}
