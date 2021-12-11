
//OBJECT=>We can create by using 3 method [1. Function constructor, 2. ES6 Classes,  3. object.create]
//FUNCTION =>3 Types [1. Function declaration ,2. function expression ,3. Arrow function]

//OBJECT
//1. By using function constructor
// function human(fullName,age,langauge){
//     this.fullName=fullName
//     this.age=age
//     this.langauge=langauge
// }
// let mayuri=new human("Mayuri",23,"Marathi")
// console.log(mayuri)

//**********************************************************************//

//2. By using ES6 class
// class person{
//     constructor(firstName,rollNo,city){
//         this.firstName=firstName
//         this.rollNo=rollNo
//         this.city=city
//     }
// }

// let ganesha=new person('Ganesha',1,'Nashik')
// console.log(ganesha)

//**********************************************************************//

//Function consructor with method

// function human(fullName, age, langauge,roll) {
//     this.fullName = fullName
//     this.age = age
//     this.langauge = langauge
//     this.roll=roll
//     this.display = function () {
//         console.log("hello all")
//     }
// }
// let mayuri = new human("Mayuri", 23, "Marathi",108)
// console.log(mayuri) //human {fullName: 'Mayuri', age: 23, langauge: 'Marathi', roll: 108, display: ƒ}

// let vaibhav=new human('vaibhav',18,"Hindi",200)
// console.log(vaibhav) //human {fullName: 'vaibhav', age: 18, langauge: 'Hindi', roll: 200, display: ƒ}

//**NOTE**//In above code display method add to every object which we are creating so avoid that we declared that method outside of consructor and add in prototype of person

//----------------------------------------------------------------------------
//SOLUTION
function human(fullName, age, langauge, roll) {
    this.fullName = fullName
    this.age = age
    this.langauge = langauge
    this.roll = roll
}
human.prototype.display = function () {
    console.log("hello all")
}

let mayuri = new human("Mayuri", 23, "Marathi", 108)
console.log(mayuri)

/* Output
[ human {fullName: 'Mayuri', age: 23, langauge: 'Marathi', roll: 108}
age: 23
fullName: "Mayuri"
langauge: "Marathi"
roll: 108
[[Prototype]]: Object
display: ƒ ()  *******display added here*******
constructor: ƒ human(fullName, age, langauge,roll)
[[Prototype]]: Object] */

/////////////////////////////////////////////////////////

let vaibhav = new human('vaibhav', 18, "Hindi", 200)
console.log(vaibhav)
/* OUTPUT
human {fullName: 'vaibhav', age: 18, langauge: 'Hindi', roll: 200}
age: 18
fullName: "vaibhav"
langauge: "Hindi"
roll: 200
[[Prototype]]: Object
display: ƒ ()  //Here is our method
constructor: ƒ human(fullName, age, langauge,roll)
[[Prototype]]: Object */

//===================================================================

//1. Every thing in javascript is object
//In above code
//Mayuri is one object
//Human is one object
//Every object has "__proto__" and "prototype" that are two property
//when we add anything in human.prototype it is added in mayuri.__proto__  proprty and it take it value from mayuri.__proto__only
//Therefore mayuri.__proto__ ==human.prototype

console.log(mayuri.__proto__ == human.prototype) //true
console.log(human.__proto__ == Function.prototype) //true


//===================================================================
//As per website
// console.log(mayuri.__proto__ == human.prototype) //true
// console.log(human.__proto__ == Function.prototype) //true
// console.log(Function.__proto__ == Object.__proto__) //true
// console.log(Object.prototype == Function.__proto__.__proto__) //true
// console.log(Object.prototype.__proto__ === null); // true

// mayuri    =>"__proto__" and "prototype"
// human      =>"__proto__" and "prototype"
// function    =>"__proto__" and "prototype"

// object    =>"__proto__" and "prototype"


