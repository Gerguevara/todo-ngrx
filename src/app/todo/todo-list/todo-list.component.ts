import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// my ngr package
import { AppState } from 'src/app/app.state.global';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Todo [] = []

  constructor( private store : Store<AppState>) { }

  ngOnInit(): void {

    // select toma del store solo la  propiedad que le interesa, en este caso esta declarada en la interfaz global
    this.store.select('todos').subscribe(todos => this.todos = todos);

  }

}
