import { Component } from "@angular/core";
import { Todo } from './types/Todo';
import { TodoFilter } from './types/TodoFilter';
import { TodoService } from './services/todo.service';
import { TODO_FILTER } from './constants/Constants';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todoItems: Todo[];
  filterList: TodoFilter[];
  selectedTodoFilter: TodoFilter;
  selectedFilter: object;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.filterList = this.todoService.getAllFilters();
    this.filterTodo(this.filterList[0]);
  }

  getTodos(filter: TodoFilter) {
    const todos = this.todoService.getAllTodos();

    switch (filter.name) {
      case TODO_FILTER.COMPLETED:
        this.todoItems = todos.filter(todo => todo.completed);
        return;
      case TODO_FILTER.ACTIVE:
        this.todoItems = todos.filter(todo => !todo.completed);
        return;
      default: this.todoItems = todos;
        return;
    }
  }

  addTodo(newTodo: Todo) {
    this.todoService.add(newTodo);
    this.getTodos(this.selectedTodoFilter);
  }

  toggleTodo(toggledTodo: Todo) {
    this.todoService.toggle(toggledTodo);
    this.getTodos(this.selectedTodoFilter);
  }

  updateTodo(changedTodo: Todo) {
    this.todoService.update(changedTodo);
  }

  removeTodo(removedTodo: Todo) {
    this.todoService.remove(removedTodo);
    this.getTodos(this.selectedTodoFilter);
  }

  filterTodo(filter: TodoFilter) {
    this.filterList.forEach(f => f.id === filter.id ? f.isSelected = true : f.isSelected = false);
    this.selectedTodoFilter = filter;
    this.getTodos(this.selectedTodoFilter);
  }

}
