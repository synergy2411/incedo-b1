var x = 'Some String';
console.log(typeof x);
// x = true;
// console.log(typeof x);
// x = 123;
// console.log(typeof x);
// x = {}
// console.log(typeof x);
// let arr<Array<number>> = [1,2,3,4];
// let [] =arr;
var Student = /** @class */ (function () {
    function Student(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    Student.prototype.getDetails = function () {
        return "Hi, " + this.firstName + ", You are " + this.age + " years old...";
    };
    return Student;
}());
var foo = new Student('Foo', 32);
console.log(foo.getDetails());
