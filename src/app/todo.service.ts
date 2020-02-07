import { Injectable } from '@angular/core';
import { Todo } from './todo';

let allTodos = [{ id: 1, name: 'task1', done: true }, { id: 2, name: 'task2', done: false }, { id: 3, name: 'taks3', done: false }];
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getAll() {
    return allTodos;
  }

  add(newTodo: Todo) {
    newTodo.id = allTodos.length + 1;
    allTodos.push(newTodo);
  }
}
