import * as counterActions from '../actions/counterActions';

const defaultState ={
    counter : 101
}

function rootReducer(state = defaultState, action){

    switch (action.type) {
        case counterActions.INCREMENT:{
            return {
                counter : state.counter + 1
            }
        }
        case counterActions.DECREMENT:{
            return {
                counter : state.counter - 1
            }
        }
        case counterActions.ADD :{
            return {
                counter : state.counter + action.value
            }
        }
        case counterActions.SUBTRACT :{
            return {
                counter : state.counter - action.value
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