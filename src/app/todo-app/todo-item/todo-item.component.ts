import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: Todo;
  @Output() onUpdateItem = new EventEmitter();
  @Output() onRemoveItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove(todo: Todo) {
    this.onRemoveItem.emit(todo);
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
    this.onUpdateItem.emit({ id: todo.id, name: changedTodoName });
  }

  cancelEditing(todo: Todo, todoElement: HTMLInputElement) {
    todo.editMode = false;
    todoElement.value = todo.name;
  }
}
