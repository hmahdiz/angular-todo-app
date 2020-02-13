import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TODO_FILTER } from '../../constants/Constants';
import { TodoFilter } from 'src/app/types/TodoFilter';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
