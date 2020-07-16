import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links =[
    {path: 'list', label:'List'},
    {path: 'detail', label:'Detail'},
  ]

  constructor(private router: Router) { }

  ngOnInit() {}
  navigateRoute(path) {
    return this.router.navigate([path]);
  }

}
