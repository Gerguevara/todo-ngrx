import { createAction, props } from "@ngrx/store";


export type filtrosValidos = 'todos' | 'completados' | 'pendientes'
// creando acciones
export const setFiltro = createAction('[TODO] set Filtro', props<{filtro: filtrosValidos}>());

