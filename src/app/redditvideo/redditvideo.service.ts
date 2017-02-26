import { Injectable } from '@angular/core';
import { Video } from './video.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class VideosService {

    private url: string = 'https://script.google.com/macros/s/AKfycbzuMdZA_WnifG440noA--o_llk_WJW484lmvCF79C643OopC1k/exec';

    constructor(private http: Http) {

    }

    getAll(): Observable<Video[]> {

        let allVideos = this.http.get(this.url)
            .map((response: Response): Video[] => {

                return response.json().map((r: any): Video => {

                    let video = <Video>({
                        url: r.url,
                        permaLink: r.permalink,
                        name: r.title
                    });

                    return video;
                });
            });

        return allVideos;
    }

}
