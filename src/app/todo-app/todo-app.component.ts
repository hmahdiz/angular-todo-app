import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/Todo';
import { TodoFilter } from '../types/TodoFilter';
import { TodoService } from '../services/todo.service';
import { TODO_FILTER } from '../constants/Constants';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  title = "Todos";
  todoItems: Todo[];
  selectedTodoFilter: TodoFilter;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos({ id: 1, name: 'All', isSelected: false });
  }

  getTodos(filter: TodoFilter) {
    const todos = this.todoService.getAll();

    switch (filter.name) {
      case TODO_FILTER.COMPLETED:
        this.todoItems = todos.filter(todo => todo.completed);
        return;
      case TODO_FILTER.ACTIVE:
        this.todoItems = todos.filter(todo => !todo.completed);
        return;
      default: this.todoItems = todos;
        return;
    }
  }

  addTodo(newTodo: Todo) {
    this.todoService.add(newTodo);
    this.getTodos(this.selectedTodoFilter);
  }

  updateTodo(changedTodo: Todo){
    this.todoService.update(changedTodo);
  }

  removeTodo(removedTodo: Todo) {
    this.todoService.remove(removedTodo);
    this.getTodos(this.selectedTodoFilter);
  }

  filterTodo(filter: TodoFilter) {
    this.selectedTodoFilter = filter;
    this.getTodos(this.selectedTodoFilter);
  }


}
