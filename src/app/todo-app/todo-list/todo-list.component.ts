import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../services/todo.service';

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

  onRemoveItem(todo) {
    this.onRemoveTodo.emit(todo);
  }
}
