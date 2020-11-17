const {
    store,
    createTask,
    deleteTask,
    resetTaskList,
} = require('./reduxStoreActionReducer')

console.log('Default Redux Store (empty task list):');
console.log(store.getState());

store.dispatch(createTask('walk dog'));
store.dispatch(createTask('feed cat'));
store.dispatch(createTask('talk to bird'));
store.dispatch(createTask('watch goldfish'));

console.log('Redux Store: ')
console.log(store.getState())