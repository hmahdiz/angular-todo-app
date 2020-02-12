import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
  }

  changeTodoToEditing(todo: Todo, todoElement: HTMLInputElement) {
    if (todo.completed) {
      return;
    }
    todo.editMode = true;
    setTimeout(() => todoElement.focus(), 0);
  }

  completeEditing(todo: Todo, changedTodoName: string) {
    todo.editMode = false;
    this.todoService.changeTodoItem(todo.id, changedTodoName);
  }

  cancelEditing(todo: Todo, todoElement: HTMLInputElement) {
    todo.editMode = false;
    todoElement.value = todo.name;
  }
}
