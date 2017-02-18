import { Component } from '@angular/core';

import { Todo } from './todo.model';

@Component({
    moduleId: module.id,
    selector: 'as-todolist',
    templateUrl: 'todolist.html'
})
export class TodolistComponent {
    public todo: Todo;
    private list: Todo[];
    private showCompleted: Boolean;

    constructor() {
        this.showCompleted = true;
        this.getTodos().then(() => {
            this.autoPlay();
        });
    }

    getTodos(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.list = [new Todo('v1', 'https://www.youtube.com/watch?v=9Z3IgSbK8x8'),
                         new Todo('v2', 'https://streamable.com/djjae'),
                         new Todo('v3', 'https://www.youtube.com/watch?v=rX0F3kY3uxU')];
            resolve();
        });
    }

    autoPlay() {
        console.log('plaing');
    }

    addTodo() {
        this.list = this.list.concat(Todo.clone(this.todo));
        this.todo.clear();
    }

    delTodo(todoIndex: number) {
        this.list = this.list.filter(
            (todo, index) => index !== todoIndex);
    }
}
