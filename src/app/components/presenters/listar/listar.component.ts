import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  todos: Todo[];
  constructor(private ts: TodoService) { }
  ngOnInit(): void {
    this.getTodos();
  }
  getTodos():void{
    this.ts.getTodos().
    subscribe(todos=>{
      this.todos = todos;
    })
  }
  

}
