import {FluxStore} from '../DashFlux';

class TodoStore extends FluxStore{
    
    constructor(){
        
        super();
        
        this.state = {};
        this.state.todos = [
            {done: false, title: 'Make the bed', id: (Math.random()*10)},
            {done: false, title: 'Wash my hands', id: (Math.random()*10)},
            {done: false, title: 'Eat', id: (Math.random()*10)},
            {done: false, title: 'Walk the dog', id: (Math.random()*10)}
        ];
    }
    
    getAllTasks(){
        return this.state.todos;
    }
    
    addTask(data){
        console.log('Add this task: ',data);
        this.setStoreState({
            todos: this.state.todos.concat([{
                done: false,
                title: data,
                id: (Math.random()*10)
            }])
        });
    }

    deleteTask(taskId){
        console.log('deleting the task');
        this.setStoreState({
            todos: this.state.todos.filter((task) => task.id!=taskId)
        });
    }
    
    handleActions(action){
        console.log('We have received the action', action);
        switch(action.actionType)
        {
            case "TODO_ADD_TASK": this.addTask(action.actionData); break;
            case "TODO_DELETE_TASK": this.deleteTask(action.actionData); break;
        }
        
    }
}
export var todoStore = new TodoStore();