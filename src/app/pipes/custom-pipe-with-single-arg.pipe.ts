import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeWithSingleArg'
})
export class CustomPipeWithSingleArgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}



/**
 *  For Create custom pipe you can use following command.
 * ng g p <path>
 * 
 * 
 * 
 */