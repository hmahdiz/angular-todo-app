import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoFilter } from 'src/app/todos/types/TodoFilter';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() onTodoFilter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filter(filter: TodoFilter) {
    this.onTodoFilter.emit(filter);
  }
}
