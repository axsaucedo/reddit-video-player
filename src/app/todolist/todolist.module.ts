import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, TodolistComponent } from './index';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        CompletedFilterPipe,
        TodolistComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    exports: [
        CompletedFilterPipe,
        TodolistComponent
    ]
})
export class TodolistModule {
}
