import {FluxDispatcher} from '../DashFlux';

export function addTask(task){
  FluxDispatcher.dispatch({
    actionType: 'TODO_ADD_TASK',
    actionData: task
  });
}

export function deleteTask(taskId){
  FluxDispatcher.dispatch({
    actionType: 'TODO_DELETE_TASK',
    actionData: taskId
  });
}