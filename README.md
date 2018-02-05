# React TODO application with Flux

The application has de "add task" feature already implemented. 

## Installation

1. Download the application by cloning the following repository URL:
```
$ git clone git@bitbucket.org:codingacademy/todolist-react.git
$ cd todolist-react
```
2. Install the npm packages
```
$ npm install
```
3. Build the application
```
$npm run build
```
## Instructions

Following the same Flux flow, please implement the "delete task" functionality:

1. Start by creating a new action "deleteTask" on the todoActions.js
2. Whom is going to trigger that action? Add a click listener on the delete buttons and call the todoActions on the click handler.
3. Handle the dispatched action on the todoStore
4. Add the new task into the array of tasts in the todoStore
5. call the emit