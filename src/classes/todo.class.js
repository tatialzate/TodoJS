export class Todo {

    constructor ( task ){
        this.task      = task;
        this.id        = new Date().getTime(); // 142526262662
        this.completed = false;
        this.created   = new Date();
    }
}