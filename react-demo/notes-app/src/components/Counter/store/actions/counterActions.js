export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

// Action Creator
export function onSubtract(value){
    return {
        type : SUBTRACT,
        value
    }
}
