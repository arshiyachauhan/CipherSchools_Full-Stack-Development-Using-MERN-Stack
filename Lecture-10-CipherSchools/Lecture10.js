//Object is a unique entity that contains some properties and methods
//An object is an instance of a class
//1. Object Literal
let person = {
    firstName: "Arshiya",
    lastName: "Chauhan",
    getFullName: function(){
        return `The name of the person is ${person.firstName} ${person.lastName}`;
    },
    phoneNumber: {
        mobile: "12345",
        landline: "6789",
    },
};
console.log(person.getFullName());
console.log(person.phoneNumber.landline);

//2.Object Constructor
function persons(firstName, lastName) {
    this.firstName= firstName;
    this.lastName = lastName;
}
let person1 = new persons("Shantunu","Shubham");
let person2 = new persons("Anurag","Mishra");
console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`);

//3.Object.create() method
const coder = {
    isStudying: false,
    printIntroduction: function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);

    },
};
const me =Object.create(coder);
me.name= "Arshiya Chauhan";
me.isStudying= true;
me.printIntroduction();

//Classes are blueprints of an object
class Vehicle {
    constructor(name, maker, engine) {
        this.name= name;
        this.maker= maker;
        this.engine= engine;
    }
    getDetails(){
        return`the name of vehicle is ${this.name}`;
    }
}
let v1= new Vehicle("Creta","Hyundai","2500cc");
let v2= new Vehicle("05","Audi", "3000cc");
console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());


function Vehicles(name, maker, engine)  {
    this.name= name;
    this.maker= maker;
    this.engine= engine;
}
Vehicles.prototype.getDetail= function(){
    return`the name of vehicle is ${this.name}`;
};
let v3= new Vehicles("Creta","Hyundai","2500cc");
let v4= new Vehicles("05","Audi", "3000cc");
console.log(v3.name);
console.log(v4.maker);
console.log(v3.getDetail());

// Abstraction- Displaying only the essential information and hiding details
//Encapsulation- Process of wrapping properties and functions within a single unit
class Person{
    constructor(name, id){
        this.name= name;
        this.id= id;
    }
    addAddress(newAddress) {
        this.address= newAddress;
    }

    getDetailsperson(){
        console.log(`Name is: ${this.name} and address is : ${this.address}`);
    }
}
let person11= new Person("Arshiya", 24);
person11.addAddress("Mumbai");
person11.getDetailsperson();

// class Persons{
//     constructor(firstName, lastName){
//         this.firstName= firstName;
//         this.lastName= lastName;
    
//     let getDetails_NoAccess= function(){
//         return `First name is; ${this.firstName} and Last name is: ${this.lastName}`;
//     };
//     this.getDetails_NoAccess = function() {
//         return `First name is; ${this.firstName} and Last name is: ${this.lastName}`;
//     }
// }
// }
// let person12= new Persons("Arshiya", "Chauhan");
// console.log(person12.firstName);
// console.log(person12.getDetails_NoAccess());
// console.log(person12.getDetails_Access());


//Inheritance
class Persons{
    constructor(firstname, lastname){
        this.firstname= firstname;
        this.lastname= lastname;
    }
    getDetails_persons= function(){
        return `First name is: ${this.firstname} and Last name is: ${this.lastname}`;
    };   
}
class Student extends Persons {
    constructor(firstname, lastname, rollno){
        super(firstname, lastname);
        this.rollno= rollno;
    }
    getDetails_persons= function(){
        return `First name is: ${this.firstname} and Last name is: ${this.lastname} and the roll number is: ${this.rollno}`;
    }; 
}
let person12= new Persons("Arshiya", "Chauhan");
console.log(person12.firstname);
console.log(person12.getDetails_persons());
let student1= new Student ("Anurag", "Mishra", 20);
console.log(student1.getDetails_persons());

//Polymorphism- same function with different signatures
//Can be achieved by Function Overloading and Overriding
