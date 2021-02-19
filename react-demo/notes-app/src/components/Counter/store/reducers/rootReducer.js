import * as counterActions from '../actions/counterActions';

const defaultState ={
    counter : 101,
    result : []
}

// this.setState() - merges the old state with new state

function rootReducer(state = defaultState, action){

    switch (action.type) {
        case counterActions.INCREMENT:{
            return {
                ...state,           // counter, result
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
        case counterActions.STORE_RESULT :{
            return {
                ...state,
                result : [...state.result, action.value]
            }
        }
        default:
            return state;
    }

    // if(action.type === 'INCREMENT'){
    //     return {
    //         counter : state.counter + 1
    //     }
    // }else if(action.type === 'DECREMENT'){
    //     return {
    //         counter : state.counter - 1
    //     }
    // }
    // return state;
}

export default rootReducer;