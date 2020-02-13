import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoNewTaskComponent } from './todos/components/todo-new-task/todo-new-task.component';
import { TodoService } from './todos/services/todo.service';
import { HeaderComponent } from './todos/components/header/header.component';
import { FooterComponent } from './todos/components/footer/footer.component';
import { TodoItemComponent } from './todos/components/todo-item/todo-item.component';
import { TodoFilterItemComponent } from './todos/components/todo-filter-item/todo-filter-item.component';
import { TodoFilterListComponent } from './todos/components/todo-filter-list/todo-filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoNewTaskComponent,
    HeaderComponent,
    FooterComponent,
    TodoItemComponent,
    TodoFilterItemComponent,
    TodoFilterListComponent
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
