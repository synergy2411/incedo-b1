// let x : string = 'Some String';
// console.log(typeof x);
// x = true;
// console.log(typeof x);
// x = 123;
// console.log(typeof x);
// x = {}
// console.log(typeof x);


// let arr<Array<number>> = [1,2,3,4];

// let [] =arr;

// class Student {
//     private firstName : string;
//     private age : number;
//     private isAdmin : boolean;

//     constructor(firstName : string, age : number){
//         this.firstName = firstName;
//         this.age = age;
//     }

//     getDetails() : string {
//         return `Hi, ${this.firstName}, You are ${this.age} years old...`;
//     }

// }

// let foo = new Student('Foo', 32);
// console.log(foo.getDetails());



// Dependency Injection

// class Foo { }
// class Bar { }

// class Bam {
//     // private f : Foo;
//     private fname : string;

//     constructor(private f: Foo, b: Bar, fname: string, age: number) {
//         // this.f = f;
//         this.fname = fname;
//      }
// }

// new Bam(new Foo(), new Bar(), 'Foo', 32);



// class Student{
//     // private email : string;
//     private age : number;

//     // DI Syntax
//     constructor(private email : string, age : number){
//         // this.email = email;
//         this.age = age;
//     }

//     sayHi(): string {
//         return `Hi, ${this.email}! Your age is ${this.age}`;
//     }
// }

// let bar = new Student('foo@test.com', 32);





// Decorators (Angular) / Annotations(Other languages) - functions with some metadata
// 5 Building blocks - Modules, Component, Services, Pipes, Directive

// ES6 Class

// @NgModule({})
// class EmployeeModule{}

// @Component({})
// class UserComponent{}

// @Injectable({})
// class UserService{}

// @Directive({})
// class UserDirective{}

// @Pipe({})
// class MyPipe{}


// Decorators - can be applied on 4 categories :
// - classes
// - class properties
// - function parameters
// - class member function

// @Component({})
// class UerComponent{

//     @Input()
//     username: string;

//     @HostBinding()
//     sayHi(@Inject xyz : sring){}

// }







// Additional types in typeScript
//  - any - string, number, boolean and so on
//  - void - no type value
//  - enum - enumeration

// let xyz : string = 'String';

// xyz = 32;

// xyz = true;


// enum Color {
//     Red,
//     Green,
//     Blue
// }

// Color.Blue





// > npm install create-react-app -g

// > npm install @angular/cli@10 -g

// > ng --version

// > ng new <project-name> -> ng new users-app

// > cd <project-name> -> cd users-app

// > npm start