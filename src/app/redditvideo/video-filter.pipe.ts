import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'asVideoFilter'
})

export class VideoFilterPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {

    }

    transform(url) {
        let lowerUrl = url.toLowerCase();
        let xUrl = url;

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
