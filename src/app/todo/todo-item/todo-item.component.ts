import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state.global';
import { Todo } from 'src/app/models/todo.model';
import { setEstadoCompletado } from '../todo-actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

 @Input('todo') todo!: Todo;
 checkBoxCompletado!: FormControl;
 txtInput!: FormControl;
 @ViewChild('editarTodo') editionTodo!: ElementRef<HTMLElement>;

editing = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkBoxCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, [Validators.required, Validators.minLength(3)]);


    this.checkBoxCompletado.valueChanges.subscribe(value =>  {

      // se dispara el dispatch del store pasando la accion el parametro que pide la
      this.store.dispatch(setEstadoCompletado({id: this.todo.id}))
    });




  }


  activateEditionMode(){
    this.editing = true;
    setTimeout(()=>{
      this.editionTodo.nativeElement.focus;
    },100)
  }

  desActivateEditionMode(){
    this.editing = false;
    console.log('se diasparo el blur');

  }

}
