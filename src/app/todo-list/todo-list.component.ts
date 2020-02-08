import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this.todoService.getAll();
    // this.todoService.getAll().subscribe((response: Todo[]) => {
    //   this.todos = response
    // });
  }

  onChangeStatus(todo: Todo) {
    // alert(todo.done);
  }
}
