import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {

  @Input() filter: object;
  @Output() onFilter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  setFilter() {
    this.onFilter.emit(this.filter)
  }
}
