import { Component } from "@angular/core";
import { Todo } from './todos/types/Todo';
import { TodoFilter } from './todos/types/TodoFilter';
import { TodoService } from './todos/services/todo.service';
import { TODO_FILTER } from './todos/constants/Constants';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Todos";
  todoItems: Todo[];
  selectedTodoFilter: TodoFilter;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos({ id: 1, name: 'All', isSelected: false });
  }

  getTodos(filter: TodoFilter) {
    const todos = this.todoService.getAll();

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
    this.selectedTodoFilter = filter;
    this.getTodos(this.selectedTodoFilter);
  }

}
