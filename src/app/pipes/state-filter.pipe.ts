import { Todo } from 'src/app/models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateFilterTodo'
})
export class StateFilterPipe implements PipeTransform {

  transform(todo: Todo[], filtro?: string): Todo[] {


      switch (filtro) {
        case 'completados':
       return todo.filter(todo => todo.completado) ;


       case 'pendientes':
        return todo.filter(todo => !todo.completado) ;

        default:
          return todo;
      }




  }

}
