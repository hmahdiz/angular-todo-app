import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-new-task',
  templateUrl: './todo-new-task.component.html',
  styleUrls: ['./todo-new-task.component.css']
})
export class TodoNewTaskComponent implements OnInit {
  newTodoName: string;
  @Output() onAdd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (!this.newTodoName || !this.newTodoName.trim())
      return;

    const newTodo = { id: 0, name: this.newTodoName, completed: false, editModel: false }
    this.onAdd.emit(newTodo);

    this.newTodoName = null;
  }

}
