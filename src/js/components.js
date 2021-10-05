import { taskList } from "..";
import { Todo } from "../classes";

//References HTML
const todoList = document.querySelector('.todo-list');
const txtNewTodo = document.querySelector('.new-todo');
const btnDeleteCompleted = document.querySelector('.clear-completed');

export const createTodoHtml = ( todo ) => {
    const htmlTodo = `
        <li class="${ (todo.completed) ? 'completed' : '' }" data-id="${ todo.id }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked' : '' }>
                <label>${ todo.task }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `
    const todoContainer = document.createElement('div');
    todoContainer.innerHTML = htmlTodo;

    todoList.append(todoContainer.firstElementChild);
    return todoContainer.firstElementChild;
}

//Events
txtNewTodo.addEventListener('keyup', ( event ) => {

    if( event.keyCode === 13 && txtNewTodo.value.length > 0 ){

        const newTodo = new Todo( txtNewTodo.value );
        taskList.newTask( newTodo );

        createTodoHtml( newTodo );
        txtNewTodo.value = '';
    }
});

todoList.addEventListener('click', ( event ) => {
    const nameElement = event.target.localName; //input, label, button
    const element     = event.target.parentElement.parentElement;
    const elementId   = element.getAttribute('data-id');

    if( nameElement.includes('input') ){
        taskList.markCompleted( elementId );
        element.classList.toggle('completed');
    }
    
    if( nameElement.includes('button') ){
        taskList.deleteTodo( elementId);
        todoList.removeChild( element );
    }
});

btnDeleteCompleted.addEventListener('click', () => {
    taskList.deleteCompleted();

    for(let i = todoList.children.length - 1; i >= 0; i--){
        const element = todoList.children[i];

        if( element.classList.contains('completed')) {
            todoList.removeChild( element );
        }
    }
});