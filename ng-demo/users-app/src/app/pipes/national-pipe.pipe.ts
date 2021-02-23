import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalPipe',
  // pure : false
})
export class NationalPipePipe implements PipeTransform {

  transform(value: number, code : string): string {
    switch (code) {
      case 'USA':
        return "+1 " + value;
      case 'EUR':
        return "+2 " + value;
      case 'AUS':
        return "+12 " + value;
      default:
        return "+91 " + value;
    } 
  }

}


// ng g p pipes/national