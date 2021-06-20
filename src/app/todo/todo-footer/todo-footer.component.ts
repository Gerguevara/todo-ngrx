import { setFiltro } from './../todo-actions/filtro.todo.actions';
import { AppState } from 'src/app/app.state.global';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string = 'todos'
  pendientes = 0;
  filtros  = ['completados','pendientes', 'todos']
  constructor(private store: Store <AppState>) { }

  ngOnInit(): void {

    // this.store.select('filtro')
      // .subscribe(filtro => this.filtroActual = filtro)

      this.store.subscribe(state => {
          this.filtroActual = state.filtro

          this.pendientes  = state.todos.filter(todo=> !todo.completado ).length
        })
  }

  aplicarFiltro(filtro: string) {
    this.store.dispatch(setFiltro({filtro:filtro}))
  }

}
