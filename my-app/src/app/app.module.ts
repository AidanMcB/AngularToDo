import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TopBarComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
