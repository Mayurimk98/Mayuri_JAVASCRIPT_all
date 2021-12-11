

// let a=10//
// //array

// let arr=[2,3,4,5,6,7,8,9]

// //indexvalue
// console.log(typeof(arr))

// //object
// //method
// //properties

// //length
// console.log(arr.length)//8
// console.log(arr[2]) //4

// console.log(arr[arr.length-1])

// //method
// let arr=[2,3,4,5,6,7,8,9]
// for(let i=0;i<=arr.length;i++){
//     console.log(i) //
//     console.log(arr[i])
// }

//1. push()
//action =>to add any element at the last of the array
//return =>new length of array

// let arr=[2,3,4,5]
// console.log(arr.push(200)) //5
// console.log(arr) //[ 2, 3, 4, 5, 200 ]

//2.pop()
//action =>to remove any elemnet from last
//return =>remove element
// let arr=[2,3,4,5]
// console.log(arr.pop()) //5

//3. unshift()
//action add element at start
//return new length
// let arr=[2,3,4,5]
// console.log(arr.unshift(100))

// let a=[100,40,50,70,80,90] //6
// console.log(a.unshift(3000)) //7
// console.log(a)

//4. shift()
//action remove element from start
//return removed element
// let arr=[2,3,4,5]
// console.log(arr.shift()) //2

//5. indexOf()
//action : give the index of given element
//return :index value
// let age=[10,34,56,67,78,89]
// console.log(age.indexOf(56) )//2
// console.log(age.indexOf(300))

// let fruits=["apple","banana","santra","grapes"]
// let userInput="BANANA".toLowerCase()
// if(fruits.indexOf(userInput)>=0){
//     console.log('fruits are available')
// }
// else{
//     console.log('fruits are not available')
// }

//5.includes()
//action => search the element aviable in array or not
//return =>boolean value

// let fruits=["apple","banana","santra","grapes"]
// console.log(fruits.includes('apple') )//true

//6. 


// let marks=[78,56,67,89,34,56]
// let a=[]
// //want +2 in every element of array
// for(let i=0;i<marks.length;i++){
//     //console.log(marks[i]+2)
//     a.push(marks[i]+2)
// }
// console.log(a)

//6. map()
//action= mapping to each and every element 
//retrun =>new array
// let marks = [78, 56, 67, 89, 34, 56]
// let ab = marks.map(function (el) {
//     return el + 2
// })
// console.log(ab)


// let marks = [78, 56, 67, 89, 34, 56]
// let a = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 60) {
//        //console.log(marks[i])
//        a.push(marks[i])
//     }
// }
// console.log(a)

//7. filter()
// let marks = [78, 56, 67, 89, 34, 56]
// let ab = marks.filter(function (el) {
//     return el > 60
// })
// console.log(ab)


// let marks = [78, 56, 67, 89, 34, 56] //  100
// let sum = 0
// for (let i = 0; i < marks.length; i++) {
//     sum = marks[i] + sum
// }
// console.log(sum)

// let a="mayuri"
// let b=" "
// for(let i=0;i<a.length;i++){
//     b=a[i]+b
// }
// console.log(b)


// let a=[1,2,3,4,5]
// let b=[]
// for(let i=0;i<a.length;i++){
//     b=a[i]+b
// }
// console.log(b)


//8. reduce
let marks = [78, 56, 67, 89, 34, 56]
let mayuri=marks.reduce(function(acc,el){
    return el+acc
},10)
console.log(mayuri)

