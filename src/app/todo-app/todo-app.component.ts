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

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos(1);
  }

  getTodos(filter:number) {
    const todos = this.todoService.getAll();
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

}
