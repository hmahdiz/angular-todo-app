import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  newTodoName: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add(newTodoName: string) {
    if (newTodoName === "" || newTodoName === null || newTodoName == undefined)
      return;

    const newTodo = { id: 0, name: newTodoName, done: false }
    this.todoService.add(newTodo);

    this.newTodoName = null;
  }

}
