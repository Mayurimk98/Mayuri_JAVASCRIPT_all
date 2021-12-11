
// let a = [1, 2, 3, 4, 5, 6, 67]

// //Array
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }
// console.log(typeof (a)) //object

// //object=>property and method

// console.log(a.length)
// //array store the value by index

// let array = [1, 2, 3, 4]
// //         0   1   2   3

// console.log(array[0]) //1

// array[2] = 200
// console.log(array)

//method
//1 push() 
//action  =>add the element at the last of array
//return  =>given the length
// let marks=[40,56,76,8,78,87,76,45,67]
// console.log(marks.push(1000)) //10

//2.pop()
//action =>remove the last element from array
//return =>removed element
// let marks=[40,56,76,8,78,87,76,45,67]
// console.log(marks.pop()) //67

//3.unshift()
//action =>add the element at first in array
//return =>new length
// let marks=[40,56,76,8,78,87,76,45,67]
// console.log(marks.unshift(300)) //10

//4. shift()
//action =>remove the element from first in array
//return => remove element
// let marks=[40,56,76,8,78,87,76,45,67]
// console.log(marks.shift()) //40

//5. indexof()
//action =>find the element in array
//return =>give index of given element
// let student = ["mayuri", "ram", "sita", "sham"]
// console.log(student.indexOf("ram")) //1
// console.log(student.indexOf('rani')) //-1

// let fruits = ["apple", "banana", "grapes", "chiku"]
// if (fruits.indexOf("apple") >= 0) {
//     console.log('fruits are available')
// }
// else {
//     console.log('fruits are not available')
// }

// let fruits = ["apple", "banana", "grapes", "chiku"]
// let userInput="Apple".toLowerCase()
// if (fruits.indexOf(userInput) >= 0) {
//     console.log('fruits are available')
// }
// else {
//     console.log('fruits are not available')
// }

//6. includes()
//action=>search element in array
//return =>true /false(boolean)
// let fruits = ["apple", "banana", "grapes", "chiku"]
// console.log(fruits.includes("applessss")) //false

// let array=[3,4,5,6,7,8]
//[5,6,7,8,10,12]
//Add 2 in each element of array
// let a=[]
// for(let i=0;i<array.length;i++){
//     console.log(array[i]+2)
//     a.push(array[i]+2)
// }
// console.log(a)

//find element which are greter tha 5
// let array=[3,4,5,6,7,8]
// let a=[]
// for(let i=0;i<array.length;i++){
//    if(array[i]>5){
//        a.push(array[i])
//    }
// }
// console.log(a)

//want sum of all element
// let array=[3,4,5,6,7,8]
// let sum=0
// for(let i=0;i<array.length;i++){
//   sum=sum+array[i]
// }
// console.log(sum)

//7.map()
//action =>interact with each element of array (when need to map from one value to new value)
//return => array
// let array=[3,4,5,6,7,8]
// let plustwo=array.map(function(el,index,array){
//     return el+2
// })
// console.log(plustwo)

//7. filter()
//action => complare the element with given condition and filterout the element
//return =>array
// let array = [3, 4, 5, 6, 7, 8]
// let greaterthanFive = array.filter(function (el, index, array) {
//     return el > 5
// })
// console.log(greaterthanFive)

//9.reduce=>
//action=>perform operation with each element and return single value
//return=>single value
// let array = [1, 2, 3, 4, 5]
// let abc = array.reduce((acc, el) => {
//     return acc + el
// }, 1)
// console.log(abc)

//10.forEach
//action perform the action with each element
//return nothing

// let names=["mayuri","amol","amit","amish"]
// // hello mayuri !!
// names.forEach(function(el){
//     console.log(`hello ${el}!!!!!`)
// })

//11.some
//action- compare the each element with given condition and 
//return -retun boolean

// let age=[20,40,56,7,8,90,45]
// let age1=age.some(function(el,index,arr){
//     return el>40
// })
// console.log(age1)

//12 every
// let age=[20,40,56,7,8,90,45]
// let age1=age.every(function(el,index,arr){
//     return el>40
// })
// console.log(age1)

//13 find=
//action =>compare the element with condition and give first element which satishfied the condition
//return =>number

let a=[1,2,3,4,5,6]
let ele=a.find((el)=>{
    return el>2
})
console.log(ele)

//14. revrese()
let arr=[1,2,3,4,5,6]
console.log(arr.reverse())

//15.flat(method)
let arr1=[[1,2,3],[5,6,7]]
console.log(arr1.flat())