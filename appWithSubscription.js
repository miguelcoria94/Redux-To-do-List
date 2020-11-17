const {
  store,
  createTask,
  deleteTask,
  resetTaskList,
} = require("./reduxStoreActionReducer");

console.log('Default Redux Store (empty task list): ');
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));

console.log("Task creation actions")