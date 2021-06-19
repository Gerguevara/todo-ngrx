import { createAction, props } from "@ngrx/store";

// creando acciones
export const crearTodo = createAction('[TODO] Crear todo', props<{texto: string}>());

export const setEstadoCompletado = createAction('[TODO] Crompletar todo', props<{id: number}>());

export const editarTodo = createAction('[TODO] editar todo', props<{id: number, texto: string}>());

export const borrarTodo = createAction('[TODO] borrar todo', props<{id: number}>());
