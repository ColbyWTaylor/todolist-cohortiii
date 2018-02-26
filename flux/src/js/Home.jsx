import React from 'react';

import {todoStore} from './stores/todoStore';
import * as todoActions from './actions/todoActions';

export class Home extends React.Component {
    
    constructor(){
        super();
        
        this.state = { 
          data: todoStore.getAllTasks(),
          taskInput: ''
        };
    }
    
    componentDidMount(){
        todoStore.on('change', () => {
            console.log('change on the state', todoStore.getAllTasks());
            this.setState({ 
    		      data: todoStore.getAllTasks()
    		    });
        });
    }
    
    handleFormSubmit(e) {
      console.log("Creating task with title: ",this.state.taskInput);
      e.preventDefault();
      todoActions.addTask(this.state.taskInput);
      this.setState({
        taskInput: ''
      });
      return false;
    }

  render() {
    var tasksToRender = this.state.data.map(function(task){
	       return (<li key={task.id}>
                  <div className="view">
                    <label>{task.title}</label>
                    <button className="destroy" onClick={() => todoActions.deleteTask(task.id)}></button>
                  </div>
                </li>);
	    });
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input
              autoFocus={true}
              className="new-todo"
              placeholder="What needs to be done?"
              value={this.state.taskInput}
              onChange={(evt) => this.setState({ taskInput: evt.target.value}) }
            />
          </form>
        </header>
        <section className="main">
              <ul className="todo-list">
              {tasksToRender}
              </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.state.data.filter(key => !key.done).length}
            </strong> item left
          </span>
        </footer>
      </section>
    );
  }
}