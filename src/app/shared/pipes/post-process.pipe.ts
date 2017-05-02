import { Pipe, PipeTransform } from '@angular/core';

declare function require(path: string): string;

const beginImage = require('!!url-loader!../../../assets/images/quote-begin.png');
const endImage = require('!!url-loader!../../../assets/images/quote-end.png');

@Pipe({
  name: 'postProcess',
})
export class PostProcessPipe implements PipeTransform {

  transform(value: string): string {
    return value.trim()
      .replace(/<li>([\s\S]*?)<\/li>/g, '<li><span>$1</span></li>')
      .replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, `
<blockquote><img src="${beginImage}">$1<img src="${endImage}"></blockquote>
`)
      .replace(/<h3>([\s\S]*?)<\/h3>/g, (_, t1, index) => {
        if (index === 0) {
          return `<h3>${t1}</h3>`;
        } else {
          return `<hr/><h3>${t1}</h3>`;
        }
      });
  }

}
