import { Injectable } from '@angular/core';
import { Todo } from '../types/Todo';
import { HttpClient } from '@angular/common/http';
import { TODO_FILTER } from '../constants/Constants';

let allTodos = [
  { id: 1, name: 'Angular Structure', completed: false, editMode: false },
  { id: 2, name: 'Refactoring', completed: true, editMode: false },
  { id: 3, name: 'Change todo-new', completed: true, editMode: false },
  { id: 4, name: 'Add remove-item', completed: true, editMode: false },
  { id: 5, name: 'Add fiters', completed: true, editMode: false }];
let filterList = [
  { id: 1, name: TODO_FILTER.ALL, isSelected: false },
  { id: 2, name: TODO_FILTER.COMPLETED, isSelected: false },
  { id: 3, name: TODO_FILTER.ACTIVE, isSelected: false }];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAllTodos() {
    // return this.httpClient.get('/assets/todo.json');
    return allTodos;
  }

  getAllFilters(){
    return filterList;
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
