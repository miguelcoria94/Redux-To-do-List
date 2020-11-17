const {
  store,
  createTask,
  deleteTask,
  resetTaskList,
} = require("./reduxStoreActionReducer");

console.log('Default Redux Store (empty task list): ');
console.log(store.getState());