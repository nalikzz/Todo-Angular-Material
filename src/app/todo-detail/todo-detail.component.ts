import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../model/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  statuses: string[];
  priorities: string[];

  todos: ToDo; 
  id: number;
  editMode= false;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  todoForm = new FormGroup({});
  constructor(
    private tdService: TodoService,
    private route: ActivatedRoute,
    private router: Router,) 
    {
    this.statuses = this.tdService.statusList;
    this.priorities = this.tdService.prioritList;
    }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getToDoFormValue();
    if (this.id) {
      this.getTodoToEdit()
      this.editMode=true;
    }
  }
  onSubmit(){
    if (this.id) {

      this.tdService.updateToDo(this.todoForm.value);

    } else {
      this.onAddValueToForm();
    }
    this.navBack();
  }
  onBack(){
    this.navBack();
  }
  navBack(){
    this.router.navigate(['list']);
  }

  getTodoToEdit(){
    this.todos = this.tdService.getTodo(this.id);

      this.todoForm.setValue({
        title: this.todos.title,
        description: this.todos.description,
        dueDate: this.todos.dueDate ,
        status: this.todos.status,
        priority: this.todos.priority,
      });
  }
  getToDoFormValue(){//Synconize Form
    this.todoForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      dueDate: new FormControl(),
      status: new FormControl(),
      priority: new FormControl(),
    });
    return this.getDefaultToDo();
  }
  getDefaultToDo(){
    this.todoForm.patchValue({
      status: 'To Do',
      priority: 'Low',
    })
  }
  onAddValueToForm(){
    let id = Math.floor(Math.random() * 1000);
    this.todoForm.value['id'] = id;
    this.tdService.addToDo(this.todoForm.value);
  }
}
