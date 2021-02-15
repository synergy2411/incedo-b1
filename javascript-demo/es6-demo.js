// ES5 / Vanilla JavaScript

//  - June, 2015- ES6 / ES2015
//  2016 - ES7
//  2017 - ES8

// ECMA - 

// ES6+ features

// - ARROW FUNCTIONS - ()=>
    //  - great for writing one-liner functions
    //  - don't have 'this' keyword - asks 'this' reference from outer scope function

    // ES5
    // var numbers = [1,2,3,4,5];
    // var doubleValue = numbers.map(function(value){
    //     return value * 2;
    // })

    // console.log(doubleValue);

    // // ES6 using Arrow functions
    // var tripleValue = numbers.map((value) =>{
    //     console.log(value); 
    //     return value*3
    //     });
    // console.log(tripleValue);

    // ES5
    // var user = {
    //     firstName : "Foo",
    //     lastName : "Bar",
    //     getDetails : function(){
    //         // return "Hello " + this.firstName + " " + this.lastName;
    //         var that = this;
    //         function nestedFunc(){
    //             return "Hello " + that.firstName + " " + that.lastName;
    //         }
    //         return nestedFunc;
    //     }
    // }

    // var nestedFunc = user.getDetails();
    // console.log(nestedFunc());


    // ES6 - Arrow

    // var user = {
    //     firstName : "Foo",
    //     lastName : "Bar",
    //     getDetails : function() {
    //         // this =
    //         return () => {
    //             // this =
    //             return "Hi " + this.firstName + " " + this.lastName;
    //         }
    //     }
    // }

    // var nestedFunc = user.getDetails();

    // console.log(nestedFunc())














// - DESTRUCTURING - Objects / Arrays
    //  - removes the references

// var arr = ["foo", "Bar", ["Bam", "Bas"]];

// var [arr1, arr2, [arr3, arr4]] = arr;
// var [ , , arr3,arr4] = arr;

// console.log(arr1,arr2, arr3, arr4);

// Object

// var user = {
//     name : "Foo",
//     age : 32,
//     address : {
//         city : "Delhi",
//         street : "201, Main street"
//     }
// }
// var {age : a, name : n, address: {city :ct, street : st}} = user;

// // console.log(age, name, street);

// console.log(a, n , ct, st);

// a = 41;

// console.log(user.age);          // ?
// console.log(a);          // ?






















// - REST AND SPREAD (...)
    
    // - REST - creates the collection from individual elements
        // - REst operator always last parameter in function parameter list

    // - SPREAD - splits the collection into individual elements


    // function display( name, ...params){
    //     console.log(params[0]);         // ?
    // }
    // display("Foo", 32, true);


    // var numbers =  [1,2,3]

    // var newNumbers = [numbers, 4,5,6];

    // console.log(newNumbers);    
    
    // 1. [1,2,3,4,5,6]
    // 2. [[1,2,3], 4,5,6]























// - TEMPLATE STRING SYNTAX
    // - Multiline string without concatenate operator (+)
    // - Embedded Variable - ${}

//   "" '' `` -back tick


// var fname = "James";
// var str = `Hello, ${fname}
// How are you?`;

// console.log(str);

















// - DEFAULT PARAMETERS

// function demo(value = 101){
//     console.log(value);
// }

// demo(201);












// - MAP/SET

// var map = new Map();

// map.set("fname", "Foo");
// map.set("age", 32);

// console.log(map.get("fname"));
// console.log(map.get("age"));














// - CLASS SYNTAX - ES6

// class Student{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName= lastName;
//         this.age = age;
//     }

//     sayHello(){
//         return "Hello " + this.firstName + ", How are you ?"
//     }
// }

// var foo = new Student("foo", "bar", 32);
// console.log(foo.sayHello());

















// - MODULES - to contain specific functionality
    // not implemented by Node Environment and Browser Environment

// - ES5 Modules

// var utils = require("./utils");

// console.log(utils.getMyLuckyNumber());



// - ES6 Module

// CommonJS Pattern to load modules
// - AMD - Asynchronous Module Definition
require("./utils");

import { getMyLuckyNumber } from "./utils";
console.log(getMyLuckyNumber);


// ES6 Modules loading resues-
// - Babel - Angular / React
// - Webpack - Angular / React
// - Node .mjs
// - systemJS
// - requireJS












// - MANY MORE UPDATES/HELPER METHODS 
// (Object.assign, Object.entries, Object.values etc)