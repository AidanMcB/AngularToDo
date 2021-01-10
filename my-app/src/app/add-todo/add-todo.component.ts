import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit {
  @Output() todoCreated = new EventEmitter<any>();
  @Input() newToDo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearToDoInfo();
    console.log(this.newToDo.date);
  }

  ngOnInit() {

  }

  private clearToDoInfo() {
    // Create an empty jogging object
    this.newToDo = {
    content: ''
    };
  };

  public addToDo (event: any) {
    this.todoCreated.emit(this.newToDo);
    this.clearToDoInfo();
  };
}
