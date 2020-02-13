import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TODO_FILTER } from 'src/app/todos/constants/Constants';
import { TodoFilter } from 'src/app/todos/types/TodoFilter';

@Component({
  selector: 'app-todo-filter-list',
  templateUrl: './todo-filter-list.component.html',
  styleUrls: ['./todo-filter-list.component.css']
})
export class TodoFilterListComponent implements OnInit {
  selectedFilter: object;
  filterList = [
    { id: 1, name: TODO_FILTER.ALL, isSelected: false },
    { id: 2, name: TODO_FILTER.COMPLETED, isSelected: false },
    { id: 3, name: TODO_FILTER.ACTIVE, isSelected: false }];
  @Output() onTodoFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.selectFilter(this.filterList[0]);
  }

  selectFilter(filter: TodoFilter) {
    this.filterList.forEach(f => f.id === filter.id ? f.isSelected = true : f.isSelected = false);
    this.onTodoFilter.emit(filter);
  }

}