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
  @Output() submit: EventEmitter<string> = new EventEmitter();
  
  public todoList = TODO_ITEMS;
  public newItemTest = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItemVal: any): void {
    //change string to fit object, add object to array of objects 
    this.todoList.push(newItemVal)
    console.log(newItemVal )
    this.newItemTest = newItemVal
  }

  onSelect(): void {
    console.log("Clicked this")
  }

}
