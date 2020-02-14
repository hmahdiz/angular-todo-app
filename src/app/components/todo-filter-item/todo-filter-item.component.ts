import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-filter-item',
  templateUrl: './todo-filter-item.component.html',
  styleUrls: ['./todo-filter-item.component.css']
})
export class TodoFilterItemComponent implements OnInit {

  @Input() filter: object;
  @Output() onTodoFilter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setFilter() {
    this.onTodoFilter.emit(this.filter)
  }
}
