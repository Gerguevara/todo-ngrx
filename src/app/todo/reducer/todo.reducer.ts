import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/models/todo.model';
import { crearTodo, setEstadoCompletado, editarTodo, borrarTodo, borrarTodosCompletados } from '../todo-actions/todo.actions';


export const estadoInicial: Todo[] = [
  new Todo('Crear mas tareas'),
  new Todo('Aprender ngrx'),
  new Todo('micro servicios con spring'),
  new Todo('trabjar con el alfredo')
];



// se envia el estado inicial y la funcion que ejecutara al crear que seria agregar al arreglo de todos una nueva tarea
//pero no se puede utlizar push, asi que lo que se hace crear un nuevo arreglo y enviarlo, concatenadole el nuevo
//elemento utlizando el crate todo


// lo que hara, nota en este caso se untiliza el pronp {texto} que es un campo que llevan los reducer, pero es opcional
const _todoReducer = createReducer(


  estadoInicial,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),

  // este reducer recibe el id, mapea el arreglo lo buscando, cuando lo tiene crea una copia de objeto y lo manda
  // luego manda una copia del nuevo arreglo
  on(setEstadoCompletado, (state, { id }) => {
    return state.map((todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      else {
        return todo
      }

    }))
  }),


  on(editarTodo, (state, { id, texto }) => {
    return state.map((todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      }
      else {
        return todo
      }

    }))
  }),


  on(borrarTodo, (state, { id }) => {
    return state.filter((todo => todo.id != id))
    }),



    on(borrarTodosCompletados, (state) => {
      return state.filter((todo => !todo.completado))
      })

  );// reducer fin

//se exporta la funcion reducer
export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
