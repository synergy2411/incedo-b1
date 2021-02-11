// // console.log("Hello World!");

// console.log("Starting the program");

// setTimeout(function(){
//     console.log("After 3 seconds...");
// }, 3000);

// setTimeout(function(){
//     console.log("After 5 seconds...");
// }, 5000);

// // program needs 1000ms to compile
// // console.log("After 3 seconds...");

// console.log("Finishing the program");

// FUNCTIONS
//  - are values
//  - can be anonymous
//  - can be nested to other functions
//  - can be returned 
//  - can be supplied as parameter to other functions (Callback)

// ERROR FIRST, CALLBACK LAST
function greet(err, message){
    if(err){
        console.log(err);
        process.exit(1);
    }
    console.log(message);
}

function greetEnglish(arr, cb){
    if(arr.length > 3){
        cb(null, "SUCCESS");
    }else{
        cb(new Error("Something Bad happened..."));
    }
}

greetEnglish( [1,2,3,4,5], greet );








// function greetSpanish(cb){
//     cb("Hola")
// }
// greetSpanish(greet);


// Output ?
// - English Greet
// - Start
// - Hello
// - End
// - English Greet Over






// function mystry(){
//     function chooseNumber(){
//         return 7;
//     }
//     return chooseNumber;
//     function chooseNumber(){
//         return 12;
//     }
// }

// function mystry(){
//     var chooseNumber = function(){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// var nestedFunc = mystry();
// console.log(nestedFunc());              // ?

// console.log(mystry());       // ?


// Function syntax
// function add(){}

// // Function Expression
// var addition = function (num1, num2){
//     return num1 + num2;
// }

// console.log(add(2,4));
// console.log(addition(5,5));
// console.log(addition());