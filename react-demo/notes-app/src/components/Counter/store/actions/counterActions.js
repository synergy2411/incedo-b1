export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT'

// Action Creator
export function onSubtract(value){
    return {
        type : SUBTRACT,
        value
    }
}

export function onStoreResult(ctr){
    return {
        type : STORE_RESULT,
        value : ctr
    }
}