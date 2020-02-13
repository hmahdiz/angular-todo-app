import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Todo[] = [];
  @Output() onToggleTodo = new EventEmitter();
  @Output() onUpdateTodo = new EventEmitter();
  @Output() onRemoveTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleItem(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }

  onUpdateItem(todo: Todo) {
    this.onUpdateTodo.emit(todo);
  }

  onRemoveItem(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }

}
