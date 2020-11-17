//import the createStore method from Redux
//you need to use commonejs module syntax to be able to run the project with node
const { createStore } = require('redux')

const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const RESET_TASK_LIST = 'RESET_TASK_LIST';

//the reducer is a function that helps manage the redux store by routing actions based on their type attribute
//define the taskReducer function and have it take in the redux stores state and an action as parameters.
//you'll want the state to default to an empty array
//since you invoke the createStore method with the taskRseducer, you need to make the tasksReducer first 
//note this project uses an array to store the tasks instead of an object to make it easier to delete a positional task
const tasksReducer = (state = [], action) => {
    //TODO: Set up switch statement to manage actions based on type
}


//each app should only have one redux store where all of an app's state is managed
//unlike react context where a single react app can utilize multiple context
//use the createstore method to generate your redex store by invoking it with a reducer
const store = createStore()

//action creators

const createTask = (taskMessage) => ({
    type: CREATE_TASK,
    taskMessage,
});

const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId,
});

const resetTaskList = () => {
    return {
        type: RESET_TASK_LIST,
        emptyTaskList: [],
    }
};
