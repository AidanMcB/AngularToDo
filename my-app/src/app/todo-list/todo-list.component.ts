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
  public newItem: ToDoItem = {id: 0, content: ''};
  public deleteTodoId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItemVal: string): void {
    //change string to fit object, add object to array of objects 

    this.newItem.id = this.todoList[this.todoList.length - 1].id + 1
    this.newItem.content = newItemVal
    this.todoList.push(this.newItem)
    this.newItem = {id: 0, content: ''}
    console.log(this.newItem)
  }

  onSelect(): void {
    // console.log("Clicked this")
  }

  deleteTodoItem(todoItemId: number): void {
    // console.log(todoItemId)
    let del = this.todoList.find( item => item.id == todoItemId)!
    let index = this.todoList.indexOf(del)
    // console.log(del)
    this.todoList.splice(index, 1)
  }

}
