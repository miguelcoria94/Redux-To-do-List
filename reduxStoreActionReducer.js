//import the createStore method from Redux
//you need to use commonejs module syntax to be able to run the project with node
const { createStore } = require('redux')

//each app should only have one redux store where all of an app's state is managed
//unlike react context where a single react app can utilize multiple context

//use the createstore method to generate your redex store by invoking it with a reducer
const store = createStore()