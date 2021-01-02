import { Component, Input, OnInit } from '@angular/core';
//import the interface of the todo-item
import { ToDoItem } from '../todo-item'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input() public todoItem: any;

  public newItem: any;

  ngOnInit(): void {
  }

  delete(): void {
    console.log("delete ", this.todoItem)
  }

}
