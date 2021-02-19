import * as counterActions from '../actions/counterActions';

const defaultState ={
    result : []
}

// this.setState() - merges the old state with new state

function resultReducer(state = defaultState, action){

    switch (action.type) {
        case counterActions.STORE_RESULT :{
            return {
                ...state,
                result : [...state.result, action.value]
            }
        }
        default:
            return state;
    }
}

export default resultReducer;