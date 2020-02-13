import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  newTodoName: string;
  @Output() onAdd= new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  add() {
    if (!this.newTodoName || !this.newTodoName.trim())
      return;
      
    const newTodo = { id: 0, name: this.newTodoName, completed: false }
    this.onAdd.emit(newTodo);
    
    this.newTodoName = null;
  }

}
