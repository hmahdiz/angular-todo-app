import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoItems: Todo[];
  @Output() onRemoveTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoveItem(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }
}
