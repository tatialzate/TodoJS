import './styles.css';

import { TodoList } from './classes'
import { createTodoHtml } from './js/components';

export const taskList = new TodoList();

taskList.tasksList.forEach( todo  => createTodoHtml(todo));
//taskList.tasksList.forEach( createTodoHtml );
console.log(taskList);