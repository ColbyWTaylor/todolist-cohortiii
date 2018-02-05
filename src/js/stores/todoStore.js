import EventEmmiter from 'events';

import TodoDispatcher from '../todoDispatcher.js';

class TodoStore extends EventEmmiter{
    
    constructor(){
        
        super();
        
        this.model = {};
        this.model.todos = [
            {done: false, title: 'Make the bed', id: (Math.random()*10)},
            {done: false, title: 'Wash my hands', id: (Math.random()*10)},
            {done: false, title: 'Eat', id: (Math.random()*10)},
            {done: false, title: 'Walk the dog', id: (Math.random()*10)}
        ];
        
    }
    
    getAllTasks(){
        return this.model.todos;
    }
    
    addTask(data){
        
        console.log('Add this task: ',data);
        this.model.todos.push({
            done: false,
            title: data,
            id: (Math.random()*10)
        });
        this.emit('change');
    }
    
    handleActions(action){
        console.log('We have received the action', action);
        switch(action.actionType)
        {
            case "TODO_ADD_TASK": this.addTask(action.data); break;
        }
        
    }
}
var todoStore = new TodoStore();
TodoDispatcher.register(todoStore.handleActions.bind(todoStore));
window.TodoDispatcher = TodoDispatcher;
export default todoStore;