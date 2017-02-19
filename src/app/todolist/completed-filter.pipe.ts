import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Todo } from './todo.model';

@Pipe({
    name: 'asCompletedFilter'
})
// export class CompletedFilterPipe implements PipeTransform {
//     transform(todos: Todo[], done): Todo[] {
//         if (done) {
//             return todos;
//         }

//         return filter(todos, {done});
//     }
// }

export class CompletedFilterPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {

    }

    transform(url) {
        let lowerUrl = url.toLowerCase();
        let xUrl = url;

        console.log(xUrl);

        if (lowerUrl.indexOf('youtube') !== -1) {
            xUrl = xUrl.replace('watch?v=', 'v/') + '?autoplay=1';
        } else if (lowerUrl.indexOf('youtu.be') !== -1) {
            let urlParts = xUrl.split('/');
            xUrl = 'https://youtube.com/v/' + urlParts[urlParts.length - 1] + '?autoplay=1';
        } else if (lowerUrl.indexOf('streamable') !== -1) {
            let urlParts = xUrl.split('/');
            urlParts.splice(urlParts.length - 1, 0, 'e');
            xUrl = urlParts.join('/') + '?autoplay=1';
        }

        return this.sanitizer.bypassSecurityTrustResourceUrl(xUrl);
    }
}
