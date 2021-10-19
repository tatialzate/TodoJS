import { Todo } from ".";

export class TodoList {
    constructor( ){
        this.getLocalStorage();
    }

    newTask ( task ){
        this.tasksList.push( task );
        this.saveLocalStorage();
    }

    markCompleted ( id ){

        for( const todo  of this.tasksList ){
            if( todo.id == id ){
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteTodo ( id ){
        this.tasksList = this.tasksList.filter( todo => todo.id != id );
        this.saveLocalStorage();
    }

    deleteCompleted () {
        this.tasksList = this.tasksList.filter( todo => !todo.completed );
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify( this.tasksList ));
    }

    getLocalStorage() {
        this.tasksList = ( localStorage.getItem('todo') )
                            ? JSON.parse( localStorage.getItem('todo') )
                            : [];
        
        this.tasksList = this.tasksList.map( obj => Todo.fromJson(obj));
    }
}