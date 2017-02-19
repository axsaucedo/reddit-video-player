export class Todo {
    public name: string;
    public url: string;
    public permaLink: string;
    public done: boolean;

    static clone(todo: Todo): Todo {
        return new Todo(todo.name, todo.url, todo.permaLink, todo.done);
    }

    constructor(name: string, url: string, permaLink: string, done = false) {
        this.name = name;
        this.url = url;
        this.permaLink = permaLink;
        this.done = done;
    }

    clear() {
        this.name = '';
        this.url = '';
        this.permaLink = '';
        this.done = false;
    }
}
