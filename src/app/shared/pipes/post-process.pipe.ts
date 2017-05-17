import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

declare function require(path: string): string;

const beginImage = require('!!url-loader!../../../assets/images/quote-begin.png');
const endImage = require('!!url-loader!../../../assets/images/quote-end.png');

@Pipe({
  name: 'postProcess',
})
export class PostProcessPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string): SafeHtml {
    const content = value.trim()
      .replace(/<li>([\s\S]*?)<\/li>/g, '<li><span>$1</span></li>')
      .replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, `
<blockquote>
<p class="end"><img src="${endImage}"/></p>
$1
<p class="begin"><img src="${beginImage}" /></p>
</blockquote>
`)
      .replace(/<h3>([\s\S]*?)<\/h3>/gi, (_, t1, index) => {
        if (index === 0) {
          return `<h3>${t1}</h3>`;
        } else {
          return `<hr class="hr-3"/><h3>${t1}</h3>`;
        }
      })
      .replace(/(<h4>[\s\S]*?<\/h4>)/gi, '<hr class="hr-4"/>$1');

    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
