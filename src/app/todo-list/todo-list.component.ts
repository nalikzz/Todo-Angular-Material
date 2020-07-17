import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:ToDo[];
  columnsName: string[] = ['Title','Description', 'Date', 'Status', 'Priority','Action'];
  alignCenter = {'text-align': 'center'};
  constructor(private tdService: TodoService) { }

  ngOnInit() {
    this.todos = this.tdService.getTodos();
  }

  // public changeColorRow(row:any){
  //   let color = ''

  //   if(row.priority === 'High'){
  //     color = 'red'// class in css name red (it's not color: red)
  //   }else if(row.priority === 'Low'){
  //     color = 'green'
  //   }else if(row.priority === 'Medium'){
  //     color = 'blue'
  //   }
  //   return  color
  // }
  public changeColorRow(row:any){
    let color = ''

    if(row.priority === 'High'){
      color = 'red'// class in css name red (it's not color: red)
    }
    return  color
  }

  public badgeColorStatus(status:string){
    if(status === 'To Do'){
      return 'badge badge-danger'
    }else if(status === 'Doing'){
      return 'badge badge-primary'
    }else{
      return 'badge badge-success'
    }
  }
  public badgeColorPriority(priority){
    if(priority === 'high'){
      return 'badge badge-danger'
    }else if(priority === 'Medium'){
      return 'badge badge-primary'
    }else{
      return 'badge badge-success'
    }
  }
}
