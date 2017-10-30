import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {return null; }


    const words: string[] = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      }
      else {
        words[i] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    const prepositions = [
      'of',
      'the',
      'for'
    ];

    return prepositions.includes(word.toLowerCase());

  }
  private toTitleCase(word: string): string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }


}
//  before refactoring this class line 8 to end
// transform(value: string): any {
//   if (!value) {return null; }

//   const prepositions = [
//     'of',
//     'the'
//   ];

//   const words: string[] = value.split(' ');
//   for (let i = 0; i < words.length; i++) {
//     if (i > 0 && prepositions.includes(words[i].toLowerCase())) {
//       words[i] = words[i].toLowerCase();
//     }
//     else {
//       words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();
//     }
//   }
//   return words.join(' ');
// }