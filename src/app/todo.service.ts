import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap,map } from 'rxjs/operators';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url:string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { 
    this.url = 'http://localhost:8080/todos';
  }
  getTodos() :Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  }
  getTodo(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${this.url}/${id}`);
  }
  deleteTodo(todo: Todo | number): Observable<void> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<void>(url);
  }
  saveTodo(todo: Todo):Observable<Todo>{
    return this.http.post<Todo>(this.url,todo);
  }
  editTodo(id:number,todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(this.url+"/"+ id, todo);
  }
}
