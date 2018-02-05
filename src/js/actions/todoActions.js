import todoDispatcher from '../todoDispatcher';

export function addTask(task){
    
      todoDispatcher.dispatch({
        actionType: 'TODO_ADD_TASK',
        data: task
      });
    
}