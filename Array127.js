// //collection of element is know a the array

// // let array=[12,13,45,67,89]
// // console.log(array.length)

// // names = ["chinmay","shirsh","ram"]

// // console.log(names[0])
// // console.log(names[names.length-1])

// let array1 = [12, 3, 4, 5, 6, 78, 90, 100, 101]
// //0  1  2  3  4   5    6    7    8 
// console.log(array1[5])

// console.log(array1[array1.length - 1])

// //console.log(array1.length)


// for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i])
// }

// console.log("======================================================")

// for (let i = array1.length - 1; i >= 0; i--) {
//     console.log(array1[i])
// }

// //======================================================================

// console.log("==========================================================")

// //push method
// //action =Add the elemnt at last
// //return  =new length
// let marks = [100, 34, 56, 78, 90, 45, 50]
// let a = marks.push(2000)
// console.log(a)
// console.log(marks) //[100,  34, 56,78,  90, 45,50, 2000 ]

// //pop method
// //action
// //return
// let b = marks.pop()
// console.log(b)  //2000
// console.log(marks)

// //unshift method
// //acton =>add elemnt at first
// //return =<new length
// let arr = [2, 3, 4, 5, 6, 7, 8]
// console.log(arr.unshift(400))

// //shift
// //action=>remove element from first
// //return =>whatever the element remove
// console.log(arr.shift())


//indexOf 
//action=>find index of given element
//retun =>retun the index
// let names=["ram","sham","dinga","pinga"]
// console.log(names.indexOf("sham"))
// console.log(names.indexOf('rani'))


// let userinput="ram"
// for(let i=0;i<names.length;i++){

// }



// cityPython = ["pune","mumbai","nagpur","kolkata"]
// let userInput = "PUNE".toLowerCase()


// if(cityPython.indexOf(userInput) >= 0){
//     console.log("python available in city'")
// }
// else{
//     console.log('python is not available')
// }

// let fruits=["mango","banana","santra","grapes"]
// for(let i=0;i<fruits.length;i++){
//     if(fruits[i].indexOf('banana')!=0){
//         console.log('fruius are available')
//     }
// }


// let fruits=["grapes","banana","apple","chiku"]
// console.log(fruits.indexOf('chiku'))
// console.log(fruits.indexOf('papaya'))


// let userInput="Banana"
// if(fruits.indexOf('userInput')>=0){
//     console.log('hey bababa is available')
// }
// else{
//     console.log('sorry bababa is not valiable')
// }


//includes
//acrion = search the given element
//return ==boolen

// let fruits = ["grapes", "banana", "apple", "chiku"]
// //onsole.log(fruits.includes('banana'))
// let userInput = "banana"

// if (fruits.includes(userInput)) {
//     console.log('hey banana is available')
// }
// else {
//     console.log('sorry banana is not valiable')
// }

//reverese

//action revrese the array
//return array
// let fruits = ["grapes", "banana", "apple", "chiku"]
// console.log(fruits.reverse())

//slice()
// let fruits = ["grapes", "banana", "apple", "chiku"]
// console.log(fruits.slice(1,3))
// console.log(fruits.slice(1))
// console.log(fruits.slice(-3))
// console.log(fruits.slice(-3,1))

//let arr=[2,3,4,5,6,7,8]
//let a=[]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]+2)
//     a.push(arr[i]+2)
// }
// console.log(a)

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>5){
//         a.push(arr[i])
//     }
// }
// console.log(a)


// let sum=0
// for(let i=0;i<arr.length;i++){
//    sum=sum+arr[i] 
// }
// console.log(sum)


let arr = [1, 2, 3, 4, 5, 6, 7]
// let a=arr.map((el)=>{
//     return el+2
// })
// console.log(a)

let pp = arr.map(function (el, index, arr) {
    return el + 2
})
console.log(pp)

let aa1 = arr.filter(function (el, index, arr) {
    return el > 4
})
console.log(aa1)


let aa2 = arr.reduce(function (acc, el, index, arr) {
    return acc + el
}, 0)
console.log(aa2)


let name1 = ["mayuri", "yogesh", "ram", "sita"]
//hello mayuri !!!

for (let i = 0; i < name1.length; i++) {
    console.log(`Hello ${name1[i]}!!!`)
}

name1.forEach((el, index, arr) => console.log(`hello ${el} !!!`))


let num = [10, 34, 5, 6, 7, 8, 9, 11]
let abc = num.find((el, index, arr) => {
    return el > 6
})
console.log(abc)

let a = [1, 2, 3, 4, 5, 6, 7]
let aa3 = a.some(function (el, index, arr) {
    return el > 2
})
console.log(aa3)

let abc1=a.every(function(el,index,arr){
    return el>2
})
console.log(abc1)