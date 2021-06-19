import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state.global';
import { crearTodo } from '../todo-actions/todo.actions';
// import * as actions from from '../todo-actions/todo.actions'

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  txtInput!: FormControl;


  constructor( private store: Store <AppState>) {

this.txtInput = new FormControl('', [Validators.required, Validators.minLength(3)])

  }

  ngOnInit(): void { }


  agregarTodo(){

    if (this.txtInput.invalid) {
      return;
    }

     this.store.dispatch(crearTodo({texto:this.txtInput.value}))
    //  this.txtInput.setValue('')
    this.txtInput.reset();
  }



}
