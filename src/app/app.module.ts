import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoNewTaskComponent } from './components/todo-new-task/todo-new-task.component';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFilterItemComponent } from './components/todo-filter-item/todo-filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNewTaskComponent,
    TodoItemComponent,
    TodoFilterItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
