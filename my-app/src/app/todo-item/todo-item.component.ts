import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
//import the interface of the todo-item
import { ToDoItem } from '../todo-item'

import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() public todoItem: any;
  @Output() public deleteItem: EventEmitter<number> = new EventEmitter<number>();



  constructor(){
  }
  

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteItem.emit(this.todoItem.id)
  }

}
