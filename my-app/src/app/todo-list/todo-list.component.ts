import { Component, Output, EventEmitter, OnInit } from '@angular/core';
// import Mock todo items
import { TODO_ITEMS } from '../mock-todo-items'
// to do item interface
import { ToDoItem } from '../todo-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoList = TODO_ITEMS;
  @Output() submit: EventEmitter<string> = new EventEmitter();
  public newItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: any): void {
    // this.todoList.push(newItem)
    console.log(newItem)
  }

  onSelect(): void {
    console.log("Clicked this")
  }

}
