import { Component } from '@angular/core';

import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'as-todolist',
    templateUrl: 'todolist.html'
})
export class TodolistComponent {
    public videoState;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.videoState = {
            currVidIndex: 0,
            currVideo: new Todo('Loading...', '', '')
        };
        this.getVideos().then(() => {
            this.autoPlay();
        });
    }

    getVideos(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.list = [
                        new Todo('This is the name of video 1',
                            'https://www.youtube.com/watch?v=9Z3IgSbK8x8',
                            'https://reddit.com/r/videos/comments/5uuuta/eric_andre_interviews_the_hot_babes_of_instagram/'),
                        new Todo('Another video from streamable',
                            'https://streamable.com/djjae',
                            'https://reddit.com/r/videos/comments/5uw8xg/chatroulette_users_surprised_with_a_real_life_fps/'),
                        new Todo('This last video is from youtube',
                            'https://www.youtube.com/watch?v=rX0F3kY3uxU',
                            'https://reddit.com/r/videos/comments/5uwudl/german_air_force_fighters_intercepting_a_plane/'),
                        new Todo('This is the name of video 1',
                            'https://www.youtube.com/watch?v=9Z3IgSbK8x8',
                            'https://reddit.com/r/videos/comments/5uuuta/eric_andre_interviews_the_hot_babes_of_instagram/'),
                        new Todo('Another video from streamable',
                            'https://streamable.com/djjae',
                            'https://reddit.com/r/videos/comments/5uw8xg/chatroulette_users_surprised_with_a_real_life_fps/'),
                        new Todo('This last video is from youtube',
                            'https://www.youtube.com/watch?v=rX0F3kY3uxU',
                            'https://reddit.com/r/videos/comments/5uwudl/german_air_force_fighters_intercepting_a_plane/'),
                        new Todo('This is the name of video 1',
                            'https://www.youtube.com/watch?v=9Z3IgSbK8x8',
                            'https://reddit.com/r/videos/comments/5uuuta/eric_andre_interviews_the_hot_babes_of_instagram/'),
                        new Todo('Another video from streamable',
                            'https://streamable.com/djjae',
                            'https://reddit.com/r/videos/comments/5uw8xg/chatroulette_users_surprised_with_a_real_life_fps/'),
                        new Todo('This last video is from youtube',
                            'https://www.youtube.com/watch?v=rX0F3kY3uxU',
                            'https://reddit.com/r/videos/comments/5uwudl/german_air_force_fighters_intercepting_a_plane/'),
                        new Todo('This is the name of video 1',
                            'https://www.youtube.com/watch?v=9Z3IgSbK8x8',
                            'https://reddit.com/r/videos/comments/5uuuta/eric_andre_interviews_the_hot_babes_of_instagram/'),
                        new Todo('Another video from streamable',
                            'https://streamable.com/djjae',
                            'https://reddit.com/r/videos/comments/5uw8xg/chatroulette_users_surprised_with_a_real_life_fps/'),
                        new Todo('This last video is from youtube',
                            'https://www.youtube.com/watch?v=rX0F3kY3uxU',
                            'https://reddit.com/r/videos/comments/5uwudl/german_air_force_fighters_intercepting_a_plane/'),
                        new Todo('This is the name of video 1',
                            'https://www.youtube.com/watch?v=9Z3IgSbK8x8',
                            'https://reddit.com/r/videos/comments/5uuuta/eric_andre_interviews_the_hot_babes_of_instagram/'),
                        new Todo('Another video from streamable',
                            'https://streamable.com/djjae',
                            'https://reddit.com/r/videos/comments/5uw8xg/chatroulette_users_surprised_with_a_real_life_fps/'),
                        new Todo('This last video is from youtube',
                            'https://www.youtube.com/watch?v=rX0F3kY3uxU',
                            'https://reddit.com/r/videos/comments/5uwudl/german_air_force_fighters_intercepting_a_plane/'),
                    ];

            setTimeout(() => { resolve(); }, 2000);
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
