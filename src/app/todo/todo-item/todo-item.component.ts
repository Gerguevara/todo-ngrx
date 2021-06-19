import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state.global';
import { Todo } from 'src/app/models/todo.model';
import { borrarTodo, editarTodo, setEstadoCompletado } from '../todo-actions/todo.actions';

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
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      this.editing = false;
      return;
    }
    this.editing = false;
     this.store.dispatch(editarTodo({id:this.todo.id, texto:this.txtInput.value}))
  }


  removeTodo(){
    this.store.dispatch(borrarTodo({id: this.todo.id}))
  }


}
