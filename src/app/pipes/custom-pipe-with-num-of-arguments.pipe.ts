import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName'
})
export class CustomPipeWithNumOfArgumentsPipe implements PipeTransform {

  transform(firstName: string,...lastName:string[]): string {
    return firstName +" "+ lastName.join(" ");
  }

}
