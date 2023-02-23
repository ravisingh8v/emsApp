import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[] | null, args: any): any {
    if (!value) return null;
    if (!args) return value;
    args = args.toUpperCase();
    return value.filter((data) => {
      return (
        JSON.stringify(data.fullName).toUpperCase().includes(args) ||
        JSON.stringify(data.email).toUpperCase().includes(args) ||
        JSON.stringify(data.phoneNumber).toUpperCase().includes(args)
      );
    });
  }
}
