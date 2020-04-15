import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerWithMultiParams'
})
export class PowerWithMultiParamsPipe implements PipeTransform {

  transform(value: number, powerOf: number = 3, buffer: number = 0): unknown {
    return Math.pow(value,powerOf) + buffer;;
  }

}
