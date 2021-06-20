import { AppState } from './../app.state.global';
import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from './reducer/todo.reducer';
import {filtroReducer} from './reducer/filtro.todo.reducer'


// debe cumplir las condiciones de la interfaz AppState
// le indicamos que reducer es el que manejara esa parte del state
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
