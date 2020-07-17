import { Injectable } from '@angular/core';
import { ToDo } from './model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public statusList:string[]=['To Do','Doing','Done'];
  public prioritList:string[]=['Low','Medium','High'];

  private todos: ToDo[] = [
    new ToDo(1,"Test1","Desc",new Date(),"To Do","Low"),
    new ToDo(2,"Test2","Desc",new Date(),"Done","Medium"),
    new ToDo(3,"Test3","Desc",new Date(),"Doing","High")
  ];
  getTodos(){
    return this.todos;
  }
  private _findIndexById(id: number){
    return this.todos.findIndex(todo => todo.id === id);
  }
  getTodo(id: number){
    // let todoIndex = this.todos.findIndex(todo => todo.id === id);  //return value by id
    const todoIndex = this._findIndexById(id);
    return this.todos[todoIndex];
  }
  updateToDo(newToDo: ToDo){
    // let findIndex = this.todos.findIndex(todo=> todo.id === newToDo.id )//return index
    const findIndex = this._findIndexById(newToDo.id);
    // this.todos[findIndex] = newToDo;
    this.todos.splice(findIndex,1,newToDo); // delete 1 joul and add new 
    // console.log(this.todos);
  }
  addToDo(todos: ToDo) { 
    this.todos.push(todos);
    // console.log('__dfjsdfs'+tododatas.priority);
  }
  deleteTodo(id: number){
    // let todoIndex = this.todos.findIndex(todo => todo.id === id);
    const todoIndex = this._findIndexById(id);
    this.todos.splice(todoIndex,1)
    console.log('>>>>>', this.todos);
  }  
}
