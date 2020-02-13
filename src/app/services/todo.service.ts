import { Injectable } from '@angular/core';
import { Todo } from '../types/Todo';
import { HttpClient } from '@angular/common/http';

let allTodos = [{ id: 1, name: 'task1', completed: true }, { id: 2, name: 'task2', completed: false }, { id: 3, name: 'taks3', completed: false }];
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    // return this.httpClient.get('/assets/todo.json');
    return allTodos;
  }

  add(newTodo: Todo) {
    newTodo.id = allTodos.length + 1;
    allTodos.push(newTodo);
  }

  update(todo: Todo) {
    const currentTodo = allTodos.find(t => t.id === todo.id);
    currentTodo.name = todo.name;
  }

  remove(todo: Todo) {
    const todoIndex = allTodos.indexOf(todo);
    allTodos.splice(todoIndex, 1);
  }

}
