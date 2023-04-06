import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  constructor() {
    this.todoList = [
      {
        sno: 1,
        title: "Vegetables",
        desc: "Oninon",
        active: false
      },
      {
        sno: 2,
        title: "Fruits",
        desc: "Apple",
        active: false
      },
      {
        sno: 3,
        title: "Dry Fruits",
        desc: "Oninon",
        active: true
      }
    ]
  }
  ngOnInit(): void {
    console.log("Every time calling the ngOnInit");
    // throw new Error('Method not implemented.');
  }
  title = 'todo-list';

}
