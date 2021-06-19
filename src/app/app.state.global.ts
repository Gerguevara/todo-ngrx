// define como debe lucir el estado, solo e suna interfaz de configuarcion para dar tipado

import { Todo } from "./models/todo.model";

export interface AppState{
  todos: Todo[],
}
