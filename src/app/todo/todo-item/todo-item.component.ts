import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';

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

  constructor() { }

  ngOnInit(): void {
    this.checkBoxCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, [Validators.required, Validators.minLength(3)]);
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
