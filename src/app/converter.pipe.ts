import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: any, args: string): unknown {
    console.log(args);
    if (!value) {
      return value = '';
    }
    switch (args) {
      case 'km':
        return value * 10;
      case 'cm':
        return value * 50;
      default:
        return value;
    }



  }

}
