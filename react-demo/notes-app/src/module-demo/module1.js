export function logging(){
    console.log("Logging Function");
}

export function getLuckyNumber(){
    console.log("Lucky Number " + Math.round(Math.random()*10))
}

export const MAGIC_NUMBER = Math.round(Math.random()*10);

function display(){
    console.log("Display function");
}

export default display;
