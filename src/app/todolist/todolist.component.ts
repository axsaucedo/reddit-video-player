import { Component } from '@angular/core';
import { VideosService } from './todo.service';
import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'as-todolist',
    templateUrl: 'todolist.html',
    providers: [VideosService]
})
export class TodolistComponent {
    public videoState;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor(private videosService: VideosService) {
        this.showCompleted = true;
        this.videoState = {
            currVidIndex: 0,
            currVideo: new Todo('Loading...', '', '')
        };
        this.getVideos().then(() => {
            this.autoPlay();
        });
        this.list = [];
    }

    getVideos(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.videosService.getAll()
                .subscribe((videos: Todo[]) => {
                    this.list = videos;
                    resolve();
                });
        });
    }

    autoPlay() {
        console.log('playing');
        this.videoState.currVideo = this.list[0];
        this.videoState.currVidIndex = 0;
    }

    nextVideo() {
        if (this.videoState.currVidIndex >= this.list.length - 1) {
            return;
        }
        this.videoState.currVidIndex += 1;
        this.videoState.currVideo = this.list[this.videoState.currVidIndex];
    }

    prevVideo() {
        if (this.videoState.currVidIndex <= 0) {
            return;
        }
        this.videoState.currVidIndex -= 1;
        this.videoState.currVideo = this.list[this.videoState.currVidIndex];
    }

    getVideoBtnClass(i) {
        if (this.videoState.currVidIndex === i) {
            return 'btn-info';
        }
        return 'btn-default';
    }

    loadVideo(i) {
        this.videoState.currVidIndex = i;
        this.videoState.currVideo = this.list[this.videoState.currVidIndex];
    }

}
