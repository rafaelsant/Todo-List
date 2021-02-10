import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() description:String;
  @Input() data:Date;
  @Input() author:String;
  @Input() todo:Todo;
  @Input() feito: Boolean;
  @Input() category: String;
  constructor(private ts: TodoService,
              private router: Router
    ) { }
  editTodo(todo:Todo){
    this.router.navigateByUrl('todos/cadastro/'+todo.id);
  }
  deleteTodo(todo: Todo){
    this.ts.deleteTodo(todo.id)
    .subscribe(()=>{
      alert('Evento Deletado com sucesso')
      window.location.reload()
    })
  }
  concluirTodo(todo:Todo){
    todo.done?todo.done =false : todo.done=true;
    this.ts.editTodo(todo.id,todo)
    .subscribe()
    .unsubscribe();
  }

}
