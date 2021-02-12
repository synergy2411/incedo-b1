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

    var user = {
        firstName : "Foo",
        lastName : "Bar",
        getDetails : function() {
            // this =
            return () => {
                // this =
                return "Hi " + this.firstName + " " + this.lastName;
            }
        }
    }

    var nestedFunc = user.getDetails();

    console.log(nestedFunc())













// - CLASS SYNTAX
// - DESTRUCTURING
// - REST AND SPREAD
// - MODULES
// - TEMPLATE STRING SYNTAX
// - DEFAULT PARAMETERS
// - MAP/SET
// - MANY MORE UPDATES/HELPER METHODS (Object.assign, Object.entries, Object.values etc)