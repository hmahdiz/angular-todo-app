import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this.todoService.getAll();
    // this.todoService.getAll().subscribe((response: Todo[]) => {
    //   this.todos = response
    // });
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
  }

  changeTodoToEditing(todo: Todo, todoElement: HTMLInputElement) {
    if(todo.done){
      return;
    }
    todo.editMode = true;
    todoElement.focus();
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
