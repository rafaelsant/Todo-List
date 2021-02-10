import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  id:number;
  toDo: Todo;
  todoForm:FormGroup;

  constructor(private fb: FormBuilder,
    private ts: TodoService,
    private router: Router,
    private activatedroute: ActivatedRoute
    ) {}

  public ngOnInit():void{
    this.id = this.activatedroute.snapshot.params['id'];
    if(this.id){
      this.ts.getTodo(this.id)
      .subscribe((todo:Todo)=>this.criarFormulario(todo))
    }else{
      this.criarFormulario(this.criarFormularioEmBranco());
    }

  }
  private criarFormulario(todo:Todo){
    this.todoForm = this.fb.group({
      author: todo.author,
      date: [todo.date, Validators.required],
      description: [todo.description, Validators.required],
      done: [todo.done, Validators.required],
      category: todo.category,
    });
  }
  private criarFormularioEmBranco():Todo{
    return{
      author: null,
      date: null,
      description: null,
      done:null,
      category:null
    } as Todo
  }

  category = [
    'Estudos',
    'Afazeres',
    'Eventos',
    'Provas'
  ];
  onSubmit() {
    this.toDo = this.todoForm.value;
    if(!this.id){
      this.ts.saveTodo(this.toDo)
      .subscribe(()=>{
        alert('Evento salvo com sucesso')
        this.router.navigateByUrl('todos');
      })
    }else{
      this.ts.editTodo(this.id,this.toDo).subscribe(
        () => {
          alert('Evento editado com sucesso')
          window.location.reload();
        })
    }
    
  }
}
