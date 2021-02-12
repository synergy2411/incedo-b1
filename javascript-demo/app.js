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

// FUNCTIONS - first class citizens
//  - are not just syntax, but are values
//  - can be anonymous
//  - can be nested to other functions
//  - can be returned 
//  - can be supplied as parameter to other functions (Callback)
//  - IIFE (immediately invoked function expression)
//  - restricts the scope of variables
//  - Closure - is the process of accessing the outer scope variables in nested functions


// function buildTicket(transport){
//     var numOfPassengers = 0;

//     var nestedFunc = function(name){
//         return "Hello " + name + "\nYour ticket ID is #"+ (++numOfPassengers)
//             + "\nYou are going via transport " + transport;
//     }
//     return nestedFunc;
// }

// // var shipFunc = buildTicket('Ship');
// console.log(buildTicket('Ship')('Foo'));
// console.log(buildTicket('Ship')('Bar'));
// // console.log(shipFunc("Foo"));
// // console.log(shipFunc("Bar"));

// var carFunc = buildTicket('Car');
// console.log(carFunc("Bam"));        
// // console.log(shipFunc("John"));        






// function testClosure(){
//     var x = 100;
//     function nestedFunc(){
//         console.log(x);
//     };
//     retrun nestedFunc;
// }











// ES5 feature
// IIFE - self invoked
// (function(){
//     console.log("IIFE works");
//     // restrict the code 
// })()

// Global variable

// var x = 101;

// function demo(){
//     // Local variable
//     var x = 201;
//     x++;
//     console.log(x);
// }

// console.log("Outside function - ",  x);         // ?

// demo();         // ?


// index.html
//  - app.js - var x = 100;
//  - main.js - x =100;









// ERROR FIRST, CALLBACK LAST
// function greet(err, message){
//     if(err){
//         console.log(err);
//         process.exit(1);
//     }
//     console.log(message);
// }

// function greetEnglish(arr, cb){
//     if(arr.length > 3){
//         cb(null, "SUCCESS");
//     }else{
//         cb(new Error("Something Bad happened..."));
//     }
// }

// greetEnglish( [1,2,3,4,5], greet );








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
// console.log(addition(3,4));





// Object - JS (ES5) is Object based / ES6 is Object oriented - Classes, extends, interface, 

//  - Function
//  - Array
//  - Object
//  - String 
//  - Number
//  - Date

// 3 ways to create an Object

//  - Literal

    // var myFriends = ["Bar", "Bam","Baz"];

    // var user = {
    //     name  : "Foo",
    //     address : "201, Main Street",
    //     age : 32,
    //     friends : myFriends,
    //     getDetails : function(){
    //         return this.name + " " + this.address;
    //     },
    //     isAdmin : true,
    //     addNewFriend : function(newFriend){
    //         this.friends.push(newFriend);
    //     }
    // };

    // user.addNewFriend("Pqr");
    // console.log(user.friends.length);       // 4
    // console.log(myFriends.length);          // 4

    // Reference Types - Objects, Arrays, Functions
    // Primitive Types - String, Number, Date etc

    // var x = [1,2,3];
    // var y = x;
    // y.push(4);
    // console.log(x);


    // var user = {
    //     name : "Foo"
    // }

    // var user2 = user;
    // user2.name = "Bar";

    // console.log(user2.name);            // ?
    // console.log(user.name);            // ?


    // user = X019284X - memory address
    // var user = {
    //     name : "Foo"
    // }

    // // 1 -// user = X019284X - memory address
    // user.name = "Bar";
    
    // // 2 - // user = X0374543 - new memory address
    // user = {
    //     name : "Baz"
    // }











//  - Contructor
//  - Instance 