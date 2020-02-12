import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { TodoTaskComponent } from './todo-app/todo-task/todo-task.component';
import { TodoService } from './services/todo.service';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HeaderComponent } from './todo-app/header/header.component';
import { FooterComponent } from './todo-app/footer/footer.component';
import { TodoItemComponent } from './todo-app/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoTaskComponent,
    TodoAppComponent,
    HeaderComponent,
    FooterComponent,
    TodoItemComponent
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
