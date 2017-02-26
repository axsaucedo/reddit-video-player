import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { VideoFilterPipe, RedditVideoComponent } from './index';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        VideoFilterPipe,
        RedditVideoComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    exports: [
        VideoFilterPipe,
        RedditVideoComponent
    ]
})
export class RedditVideoModule {
}
