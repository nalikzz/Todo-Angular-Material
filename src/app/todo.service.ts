import { Injectable } from '@angular/core';
import { ToDo } from './model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: ToDo[] = [
    new ToDo(1,"Test1","Desc",new Date(),"To Do","Low"),
    new ToDo(2,"Test2","Desc",new Date(),"Done","Medium"),
    new ToDo(3,"Test3","Desc",new Date(),"Doing","High")
  ];
  getTodos(){
    console.log();
    
    return this.todos;
  }
}
