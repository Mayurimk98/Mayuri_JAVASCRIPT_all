// let obj={
//     fullname:"mayuri",
//     lastname:"katwe",
//     display:function(){
//         console.log(this.fullname)
//     }
// }

// obj.display() //mayuri  fulnction acll


// let a=obj.display // function print

// // a=function(){
// //     console.log(this.fullname)
// // }

// a() // undefined

// //bind()
// //call()
// //apply()

// let obj={
//     fullname:"mayuri",
//     lastname:"katwe",
//     display:function(a,b){
//         console.log(this.fullname)
//         console.log(a+b)
//     }
// }

// //arr=[1,2,3]

// amol={
//     fullname:"amol"
// }

// amit={
//     fullname:"amit"
// }

// // let ab=obj.display.bind(obj)
// // ab()//


// // let amol1=obj.display.bind(amol)
// // amol1() //

// //call apply

// //obj.display.call(amit,12,10)

// obj.display.apply(amol,[1,2,3])


//*********************************************************************************** */

// let mayuri={
//     fullName:"mayuri",
//     lastName:"katwe"
// }

//1 method
// class person{
//     fullname="mayuri"
//     lastname="katwe"
// }

// let amol=new person()

// console.log(amol)
// // amol={
//     fullname:"mayuri",
//     lastname:'katwe'
// }

//by constuctor
// class student {
//     city = "nashik"
//     constructor(a, b) {
//         this.fullname = a
//         this.lastname = b
//     }
// }

// let mayuri=new student('mayuri',"katwe")
// console.log(mayuri)


// let avanti=new student('avanti',"rao")
// console.log(avanti)

// //add property
// avanti.age=23
// console.log(avanti)

// //update property
// avanti.age=21
// console.log(avanti)

// //retrive property

// console.log(avanti.age) //21

// //delete property

// delete avanti.age
// console.log(avanti)


//=======================================================


//let human = []




// let objectNum = prompt("Please enter the number of object u have to create")

// for (let i = 0; i < objectNum; i++) {
//     let age = prompt("Please Enter the age")
//     let firstName = prompt("Please Enter the firstname ")
//     let langauge = prompt("Please Enter the langauge")
//     let obj = new person(age, firstName, langauge)
//     human.push(obj)

// }


//=============================================================================


class student{
    constructor(age,firstname){
        this.age=age
        this.firstname=firstname
    }
}
human = [] //[1, 2, 3]
let obno = Number(prompt('how many obj u have to create')) //3

for (let i = 0; i <= obno; i++) {
    let age = prompt('enter age')
    let firstname = prompt('firstname')
    let obj = new student(age, firstname)
    human.push(obj)
}

console.log(human)

human.forEach((el) => {
    for (let [key, value] of Object.entries(el))
        console.log(key, value)

})



