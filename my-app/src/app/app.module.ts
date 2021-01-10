import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { FormsModule } from '@angular/forms'; 

import { ToDoService } from './to-do.service';
import { HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './add-todo/add-todo.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TopBarComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
