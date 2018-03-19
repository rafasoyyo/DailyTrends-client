import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: Array<Object>, text: string) {
    if (!text || !text.length) {
      return value;
    }

    if (!value || !value.length) {
      return [];
    }

    return (value || []).filter((item) => {
      return Object.keys(item).some((key) => {
        return new RegExp(text, 'gi').test(item[key]);
      });
    });

  }
}
