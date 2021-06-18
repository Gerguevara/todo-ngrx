import { createAction, props } from "@ngrx/store";

// creando acciones
export const crearTodo = createAction('[TODO] Crear todo', props<{texto: string}>());
