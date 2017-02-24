import { Component } from '@angular/core';
import { VideosService } from './todo.service';
import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'as-todolist',
    templateUrl: 'todolist.html',
    providers: [VideosService],
    host: {
        '(window:keydown)': 'nextVideo($event); prevVideo($event); openComments($event)',
    }
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
        this.videoState.currVideo = this.list[0];
        this.videoState.currVidIndex = 0;
    }

    nextVideo(e) {
        let keys = ['ArrowDown', 'ArrowRight', 'n', 'j', 'l'];
        if (e && keys.indexOf(e.key) < 0) {
            return;
        }

        if (this.videoState.currVidIndex >= this.list.length - 1) {
            return;
        }
        this.videoState.currVidIndex += 1;
        this.videoState.currVideo = this.list[this.videoState.currVidIndex];
    }

    prevVideo(e) {
        let keys = ['ArrowLeft', 'ArrowUp', 'p', 'k', 'h'];
        if (e && keys.indexOf(e.key) < 0) {
            return;
        }

        if (this.videoState.currVidIndex <= 0) {
            return;
        }
        this.videoState.currVidIndex -= 1;
        this.videoState.currVideo = this.list[this.videoState.currVidIndex];
    }

    openComments(e) {
        if (e && e.key !== 'c') {
            return;
        }

        window.open(this.videoState.currVideo.permaLink);
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
