import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo : Todo;
  
  ngOnInit():void {
  }
onClick(todo:Todo){
  console.log("todo list clicked");
}

}
