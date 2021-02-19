import * as counterActions from '../actions/counterActions';

const defaultState ={
    counter : 101
}

// this.setState() - merges the old state with new state

function counterReducer(state = defaultState, action){

    switch (action.type) {
        case counterActions.INCREMENT:{
            return {
                ...state,          
                counter : state.counter + 1
            }
        }
        case counterActions.DECREMENT:{
            return {
                ...state,
                counter : state.counter - 1
            }
        }
        case counterActions.ADD :{
            return {
                ...state,
                counter : state.counter + action.value
            }
        }
        case counterActions.SUBTRACT :{
            return {
                ...state,
                counter : state.counter - action.value
            }
        }
        default:
            return state;
    }
}

export default counterReducer;