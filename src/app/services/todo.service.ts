import { Injectable } from '@angular/core';
import { Todo } from '../Todo';
import { HttpClient } from '@angular/common/http';

let allTodos = [{ id: 1, name: 'task1', done: true }, { id: 2, name: 'task2', done: false }, { id: 3, name: 'taks3', done: false }];
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

  remove(todo: Todo) {
    const todoIndex = allTodos.indexOf(todo);
    allTodos.splice(todoIndex, 1);
  }

  changeTodoItem(id: number, newTodoName: string) {
    const currentTodo = allTodos.find(todo => todo.id === id);
    currentTodo.name = newTodoName;
  }
}
