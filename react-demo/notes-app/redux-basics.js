// ES5 Module system
const {createStore} = require("redux");


const defaultState = {
    counter : 0
}

// Reducer function
function rootReducer(state = defaultState, action){
    if(action.type === 'INCREMENT'){
        return {
         counter : state.counter + 1   
        }
    }else if (action.type === 'DECREMENT'){
        return {
            counter : state.counter - 1
        }
    }else if(action.type === 'ADD'){
        return {
            counter : state.counter + action.payload
        }
    }
    return state;
}

const store = createStore(rootReducer);

// Access the State - getState()
// Registering the listener using Subscribe
store.subscribe(() => {
    console.log("State - ", store.getState());    
})

// Dispatch Action
store.dispatch({type : 'INCREMENT'})
// console.log("State after INCREMENT - ", store.getState());

store.dispatch({type : 'DECREMENT'})
// console.log("State after DECREMENT - ", store.getState());

store.dispatch({type : 'ADD', payload : 10})