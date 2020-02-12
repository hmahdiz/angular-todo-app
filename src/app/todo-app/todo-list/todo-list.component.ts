import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoItems: Todo[];

  constructor() { }

  ngOnInit() {
  }
}
