import './styles.css';

import { Todo, TodoList } from './classes'
import { createTodoHtml } from './js/components';

export const taskList = new TodoList();
const task = new Todo("Learning javascript");
taskList.newTask( task );
createTodoHtml(task);

console.log(taskList);