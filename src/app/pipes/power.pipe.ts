import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, powerOf: number = 3): number {
    return Math.pow(value,powerOf);
  }

}
