import { Injectable } from '@angular/core';
import { Todo } from '../types/Todo';
import { HttpClient } from '@angular/common/http';

let allTodos = [
  { id: 1, name: 'Angular Structure', completed: false },
  { id: 2, name: 'Refactoring', completed: true },
  { id: 3, name: 'Change todo-new', completed: true },
  { id: 4, name: 'Add remove-item', completed: true },
  { id: 5, name: 'Add fiters', completed: true }];
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

  toggle(todo: Todo) {
    const currentTodo = allTodos.find(t => t.id === todo.id);
    currentTodo.completed = !todo.completed;
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
