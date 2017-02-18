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
