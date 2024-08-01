import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utf8Correction'
})
export class Utf8CorrectionPipe implements PipeTransform {

  transform(value: string): string {
    if (!value)
      return value;

    return this.correctUtf8Errors(value);
  }

  private correctUtf8Errors(value: string): string {
    return value.replace(/Ã¡/g, 'á')
                .replace(/Ã©/g, 'é')
                .replace(/Ã­/g, 'í')
                .replace(/Ã³/g, 'ó')
                .replace(/Ãº/g, 'ú')
                .replace(/Ã±/g, 'ñ')
                .replace(/Â/g, '')
                .replace(/Ãš/g, 'é');
  }
}
