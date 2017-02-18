export class Todo {
    public name: string;
    public url: string;
    public done: boolean;

    static clone(todo: Todo): Todo {
        return new Todo(todo.name, todo.url, todo.done);
    }

    constructor(name: string, url: string, done = false) {
        this.name = name;
        this.url = url;
        this.done = done;
    }

    clear() {
        this.name = '';
        this.url = '';
        this.done = false;
    }
}
