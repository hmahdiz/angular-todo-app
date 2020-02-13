import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  title = "Todos";
  todoItems: Todo[];
  totalTodos: number;
  currentFilter;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos(1);
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.getTodos(this.currentFilter);
  }

  getTodos(filter: number) {
    const todos = this.todoService.getAll();
    this.totalTodos = todos.length;
    switch (filter) {
      case 2:
        this.todoItems = todos.filter(todo => todo.completed);
        return;
      case 3:
        this.todoItems = todos.filter(todo => !todo.completed);
        return;
      default: this.todoItems = todos;
        return;
    }
    // this.todoService.getAll().subscribe((response: Todo[]) => {
    //   this.todos = response
    // });
  }

  addTodo(newTodo: Todo) {
    this.todoService.add(newTodo);
    this.getTodos(this.currentFilter);
  }

  removeTodo(removedTodo: Todo) {
    this.todoService.remove(removedTodo);
    this.getTodos(this.currentFilter);
  }

}
