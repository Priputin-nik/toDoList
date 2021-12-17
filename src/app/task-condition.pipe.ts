import { Pipe, PipeTransform } from '@angular/core';
import { FilterCondition } from './area/area.component';
import { ArrayMessage } from './array-message';

@Pipe({
  name: 'taskCondition',
  pure: false
})
export class TaskConditionPipe implements PipeTransform {

  transform(taskArray: ArrayMessage[], toggleFilter: FilterCondition): ArrayMessage[] {
    switch(toggleFilter) {
      case (FilterCondition.all):
        return taskArray;
      case (FilterCondition.done):
        return taskArray.filter(task => task.condition);
      case (FilterCondition.unDone):
        return taskArray.filter(task => !task.condition);
      default:
        return taskArray;
    }
    
  }
}