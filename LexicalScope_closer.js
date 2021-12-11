// let human={
//     fullName:"Mayuri",
//     age :23,
//     display:function (){
//         console.log(fullName)
//     }
// }
// human.display()//fullName is not defined

//================================================

// let human = {
//     fullName: "Mayuri",
//     age: 23,
//     display: function () {
//         console.log(this.fullName)
//     }
// }
// human.display()//Mayuri

//==================================================

//Lexical Scope=> If we call function inside the function then variables which are declared inside the parent function can be accessible in child function but variable which is declared in child b=function is not accessible in parent function
//(function inside a function parent functions variable , accessible in child function)


// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b)//30

//     function add1() {
//         let c = 100
//         let d = 200
//         console.log(c + d)//300

//         function add3() {
//             let e = 900
//             let f = 700
//             console.log(e + f)//1600
//         }
//         add3()
//     }
//     add1()
// }

// add()

//===============================================================================

// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b)//30
//     //console.log(e + f) //parent function does not have access to child function variable

//     function add1() {
//         let c = 100
//         let d = 200
//         console.log(c + d + a + b)//330

//         function add3() {
//             let e = 900
//             let f = 700
//             console.log(e + f + c + d + a + b)//1930
//         }
//         add3()
//     }
//     add1()
// }

// add()

//==========================================================================================

// let e = 20
// let f = 30
// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b)//30
//     console.log(e + f)//50

//     function add1() {
//         let c = 100
//         let d = 200
//         console.log(c + d + a + b)//330

//         function add3() {
//             let e = 900
//             let f = 700
//             console.log(e + f + c + d + a + b)//1930
//         }
//         add3()
//     }
//     add1()
// }

// add()

//=======================================================================================

// function add1(){
//     let a=8
//     let b=9
//     return a+b
//     console.log(a+b)//Statement below return statement never execute

// }
// console.log(add1())//17

// //===========================================================================================

// //Closer=> You can access variable mention in parent funtion into child function after return keyword called a closures

// function sum(){
//     let a=2
//     let b=3
//         return function(){
//             console.log("hello")
//             console.log(a+b)

//     }    
// }
// let value=sum()
// value()

//===========================================================================================

// function sum() {
//     let a = 2
//     let b = 3
//     return {
//         fn1: function () {
//             console.log("hey")
//         },

//         fn2: function () {
//             console.log("helloo")
//         },

//         fn3: function () {
//             console.log("I m sry")
//         }
//     }
// }
// let {fn1,fn2,fn3}= sum()
// fn1()
// fn2()
// fn3()

//============================Next day=======================================


// let person={
//     fullName:"Mayuri",
//     lastName:'Katwe',
//     display:function(){
//         console.log('hello')
//     }
// }
// console.log(person.display) //function(){console.log('hello')}
// person.display() //hello

//---------------------------------------------------------------

// let person={
//     fullName:"Mayuri",
//     lastName:'Katwe',
//     display:function(){
//         return function(){
//             return 'hello'
//         }
//     }
// }
// let pp=person.display
// let mm=pp()
// console.log(mm())

//--------------------------------------------------------------

// let add=function(a,b){
//     console.log(a+b) //22
// }
// add(12,10)

//--------------------------------------------------------------
// let add=function(a,b){
//     //return (a+b) //22
// }
// let aa=add(12,10)
// console.log(aa) //undefined

//--------------------------------------------------------------

// function sub(a,b){
//     return add
// }

// let add=function (a,b){
//     return a+b 
//     }


// let hh=sub(10,20)(20,30)
// console.log(hh)

//================================================================

//CLOSER
// let command=function(a,b){
//     //console.log(a+b)//8
//     return function(){
//         return (a*b)
//     }
// }

// let mk=command(5,3)()
// console.log(mk)

//================================================================

//THIS KYEWORD

// let human={
//     fullName:"Mayuri",
//     lastName:"Katwe",
//     display:function(){
//         console.log(fullName) //fullName is not define
//     }
// }

// human.display()

//=====================================================================
// let human = {
//     fullName: "Mayuri",
//     lastName: "Katwe",
//     display: function () {

//     console.log(this) //Human
//         console.log(this.fullName) //Mayuri
//     }
// }

// human.display()

//--------------------------------------------------------------------

//1. Scope of this when there is function inside function in object

//first is function expression and second is function declaration 
//function expression has local scope and function declaraton has globle scope

// let person = {
//     fullName: "Mayuri",
//     age: 23,
//     display: function () {
//         console.log(`My firstName is ${this.fullName}`) //My fisrname is Mayuri

//         function show() {
//             console.log(`My firstName is ${this.fullName}`) //My firstName is undefined
//         }

//         show()
//     }
// }
// person.display()

// var fullName="Ganesha"
// let person = {
//     fullName: "Mayuri",
//     age: 23,
//     display: function () {
//         console.log(`My firstName is ${this.fullName}`) //My fisrname is Mayuri

//         function show() {
//             console.log(`My firstName is ${this.fullName}`) //My firstName is undefined
//         }

//         show()
//     }
// }
// person.display()

//==============================================================

//first function is function expression second is also function expression
//first function having local scope and second function having globl scope
// var fullName="ganesha"
// let person = {
//     fullName: "Mayuri",
//     age: 23,
//     display: function () {
//         console.log(`My firstName is ${this.fullName}`) //My fisrname is Mayuri

//         show=function(){
//             console.log(`My firstName is ${this.fullName}`) //My firstName is ganesha
//         }

//         show()
//     }
// }
// person.display()

//=========================================================================================

// var fullName="Manjulika"
// let person = {
//     fullName: "Mayuri",
//     age: 23,
//     display: ()=> {
//         console.log(`My firstName is ${this.fullName}`) //My fisrname is Manjulika

//         show=()=>{
//             console.log(`My firstName is ${this.fullName}`) //My firstName is Manhulika
//         }

//         show()
//     }
// }
// person.display()

//===========================================================================================

// let person={
//     fullName:"Mayuri",
//     LastName:"Katwe",
//     display:function(){
//         console.log(this.fullName)
//     }
// }


// person.display() //we got Mauri
// console.log(person.display) //we got function
// // let unknown=person.display
// // // unknown=display:function(){
// // //     console.log(this.fullName)
// // // }
// // unknown() //undefined

// let new1=person.display.bind(person)
// new1()

// let arr=["gm","gn","ga","ge"]
// let display = function (arr) {
//     console.log(arr[0]+" " +this.fullName+" "+arr[3])
// }

// let yogesh = {
//     fullName: "yogesh"
// }

// let kiran = {
//     fullName: "kiran"
// }

// let mayuri={
//     fullName:"Mayurik"
// }

// let hh = display.bind(yogesh,"gm","gn")()

// display.call(kiran,"gm","gn")

// display.apply(mayuri,[...[arr]])





// function add(){
//     let a=10
//     let b=20
//     return [function a1(){console.log(a+b)},function b1(){console.log(a+b)}]
        
// }
// let [a,b]=add()
// a()
// b()

function sub(){
    console.log("hello")
}

function add(){
    let a=10
    let b=20
    return sub() //hello
        
}
let aa =add()
console.log(aa)

sub()//hello

