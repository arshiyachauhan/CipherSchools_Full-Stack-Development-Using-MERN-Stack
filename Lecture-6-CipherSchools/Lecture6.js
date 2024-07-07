var x= 15;
{
    let x= 5;//let allows to redeclare a variable
    console.log(x);
}
{
    const z= 3;// const used for a constant value that cannot be changed
    console.log(x);
    // z=6;
    // console.log(x);
}
console.log(x);

var x = function(x,y){
    return x + y;
};
console.log(x(5,6));

const u = (x, y) => x + y;//Arrow Function
console.log(u(5, 6));

//SPREAD OPERATOR-expands any iterable data into its own elements
const q1= ["Jan","Feb","Mar"];
const q2= ["Jul","Aug","Sep"];
const q3= ["Oct","Nov","Dec"];
const year=[...q1, ...q2, ...q3];
console.log(year);

const mynumbers = [25, 12, 50, -70, 77];
let maxValue = Math.max(...mynumbers);
console.log(maxValue);

//for-of loop
let sum = 0;
for(let num of mynumbers){
    sum = sum + num;
}
console.log(sum);

const name = "CipherSchools";
let text= "";
for(let ch of name){
    text += ch + " "; 
}
console.log(text);

//Javascript Map
const fruits= new Map([
    ["apples", 500],
    ["banana",300], 
    ["oranges",200]
]);
console.log(fruits);
console.log(fruits.get("oranges"));

//Sets
const letters= new Set();
letters.add("a");
letters.add("b");
letters.add("a");
console.log(letters);

//Classes
class Car {
    constructor(name,mfgyear){
        this.name= name;
        this.mfgyear= mfgyear;
    }
}
const myCar1= new Car("Mercedes", 2022);
const myCar2= new Car("Porsche", 2020);
console.log(myCar1,myCar2);

//Javascript Promise
const myfunc = () => {
    return new Promise((resolve, reject)=> {
    setTimeout(() => {
        console.log("This is inside promise");
        resolve();
}, 2000);
});
};
myfunc()
.then(()=> {
    console.log("Resolved");
}).catch(()=> {
    console.error("Rejected");
});

//Javascript Symbols- create unique identifier
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30 ,
};
let id = Symbol("id");
person[id]= 14011;
console.log(person);

//default parameter value
const addTwoNumbers = (a,b = 10) => a+b;
console.log(addTwoNumbers(10,11));
console.log(addTwoNumbers(9));//b uses default value

//function rest parameter
const addNumbers = (...args) => {
    console.log(args);//elements get passed in an array
    let sum = 0;
    for( let arg of args){
        sum += arg;
    }
    return sum;//returns sum of numbers
};
console.log(addNumbers(10, 14, 30, 22, 26));
