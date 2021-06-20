import { setFiltro } from './../todo-actions/filtro.todo.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState = 'todo';

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, {filtro}) => filtro),

);

export function filtroReducer(state: string | undefined, action: Action) {
  return _filtroReducer(state, action);
}
