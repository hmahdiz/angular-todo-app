import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  newTodoName: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    if (!this.newTodoName || !this.newTodoName.trim())
      return;

    const newTodo = { id: 0, name: this.newTodoName, done: false }
    this.todoService.add(newTodo);

    this.newTodoName = null;
  }

}
