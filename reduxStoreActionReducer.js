const { createStore } = require("redux");

const CREATE_TASK = "CREATE_TASK";
const DELETE_TASK = "DELETE_TASK";
const RESET_TASK_LIST = "RESET_TASK_LIST";

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    // switch case for `createTask` action
    case CREATE_TASK:
      debugger;
      const newTask = {
        message: action.taskMessage,
      };
      return [...state, newTask];
    // switch case for `deleteTask` action
    case DELETE_TASK:
    case DELETE_TASK:
      const idx = action.taskId;
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    // switch case for `resetTaskList` action
    case RESET_TASK_LIST:
    case RESET_TASK_LIST:
      return action.emptyTaskList;
    // default switch case
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

// action creators
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
  };
};

module.exports = {
  store,
  createTask,
  deleteTask,
  resetTaskList,
};
