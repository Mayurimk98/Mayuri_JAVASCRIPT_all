//There are 3 types of function

//1. function declaration
// function add() {
//     console.log("hello")
// }
//add()

// //2. function expression
// let add = function () {
//     console.log("hello")
// }
//add()

// //3. arrow function
// let add = () => {
//     console.log("hello")
// }
//add()

//====================================================================

//let var const

// let a=10
// let a=20  //identifier a is already been declared

// let a
// console.log(a) //undefined

// let a = 10

// {
//     let a = 20
//     a=50
//     console.log(a) //50

//     {
//         a=30
//         console.log(a) //30
//         a=20
//     }
// }

// console.log(a) //10


// var a=10
// var a=30
// console.log(a) //30
// {
//     var b=20
//     a=70
//     console.log(b) //20
//     console.log(a) //70
// }

// console.log(a) //70
// console.log(b) //20

// const a=10
// const a=30
// console.log(a) //identifire a is already been declared

// const b //missing initializer at const declaration
// b=30 
// console.log(b)

// const a=10
// console.log(a) //10
// { 
//     const a=20
//     console.log(a) //20
//     a=100  // error asssignment of const varialble
// }

// console.log(a)

// let a = 10
// let b = () => {
//     a = 20
//     let c = 30
//     console.log(a) //20
//     console.log(c) //30
//     c=100
// }
// b()
// console.log(a) //20
// console.log(c) //100

//===============================================================
// function func1(){
//     setTimeout(()=>{
//       console.log(x); //x is not define
//       console.log(y);  //y is not defied
//     },3000);

//     var x = 2;
//     let y = 12;
//   }

//   func1();

//   // Code 2:

//   function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000); //1 2
//   }

//   }

//   func2();


//   // Code 3:

//   (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//   })();

//   //3 //1

//***************************************************************************/

// let mayuri = {
//     "fullName": "Mayuri",
//     age: 20,
//     display: function () {
//         console.log(this.fullName)
//     }
// }
// mayuri.display()//Mayuri

// function add() {
//     console.log(this) //refere to global object

// }
// add()


