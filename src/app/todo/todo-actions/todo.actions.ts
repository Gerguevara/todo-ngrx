import { createAction, props } from "@ngrx/store";

// creando acciones
export const crearTodo = createAction('[TODO] Crear todo', props<{texto: string}>());

export const setEstadoCompletado = createAction('[TODO] Crompletar todo', props<{id: number}>());
