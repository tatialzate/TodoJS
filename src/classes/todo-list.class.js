export class TodoList {
    constructor( ){
        this.tasksList = [];
    }

    newTask ( task ){
        this.tasksList.push( task );
    }

    markCompleted ( id ){

        for( const todo  of this.tasksList ){
            if( todo.id == id ){
                todo.completed = !todo.completed;
                break;
            }
        }
    }

    deleteTodo ( id ){
        this.tasksList = this.tasksList.filter( todo => todo.id != id );
    }

    deleteCompleted () {
        this.tasksList = this.tasksList.filter( todo => !todo.completed );
    }
}