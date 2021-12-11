
//Loop iteration
//for loop, while loop,dowhile loop

//for loop used when duration is fix (need to check head tail condition we need to toss 2 time)

// for ([intialization];[conditioncheck],[incremenet/decremenet]){

// }

//forward loop==>
// for (let i=0;i<10;i++){
//     console.log(i)
// }

//OR
// let i=0
// for(;i<=10;){
//     console.log(i)
//     i++
// }
// console.log(i)

//reverse loop===>
// for (let i=10;i>=0;i--){
//     console.log(i)
// }

// let k = 'amol'
// let a = ""
// let b = ""

// for (let i = 0; i < k.length; i++) {
//     a = k[i] + a
// }
// console.log(a)

// for (let i = k.length - 1; i >= 0; i--) {
//     b = b + k[i]
// }
// console.log(b)

// let r = [2, 3, 2, 44, 77, 55, 444, 99, 99,77, 88, 44]
// let pa = []
// let qa = []
// for (let i = 0; i < r.length; i++) {
//     if (pa.indexOf(r[i]) <= 0) {
//         pa.push(r[i])
//     }
//     else {
//         qa.push(r[i])
//     }
// }
// console.log(pa)
// console.log(qa)

// let r = [2, 3, 2, 44, 77, 55, 444, 99, 99,77, 88, 44]
// let pa = []
// let qa = []
// for (let i = 0; i < r.length; i++) {
//     if (!pa.includes(r[i])) {
//         pa.push(r[i])
//     }
//     else {
//         qa.push(r[i])
//     }
// }
// console.log(pa)
// console.log(qa)


//count the number of space
// let name1="chinmay deshpand is learing javascrip"
// let count=0
// for(let i=0;i<name1.length;i++){
//     if(name1[i]==" "){
//         count++
//     }
// }
// console.log(count)

// console.log(name1.split(" ").length-1)


//break and continue statement
// for (let i=0;i<=10;i++){
//     console.log(i)
//     if(i==5){
//         break;
//     }
// }

// for (let i=0;i<10;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i)
// }


//while loop ==>infinite condition

// let ia = 0
// while (ia <= 10) {
//     console.log(ia)
//     ia = ia + 1

// }

// //print random until given number condition match
// let number = 100
// let randomnum = 0
// while (randomnum !== number) {
//     randomnum = Math.floor(Math.random() * 100) + 1
//     console.log(randomnum)
// }



/* //While loop Syntax

Initialization
while(condition){
    statemenet
    incremenet/decremenet
} */

// let a = 0
// while (a <= 10) {
//     console.log(a)
//     a++
// }

// //random number by using while loop

// let randomNumber = Math.floor(Math.random() * 5) + 1
// let userInput = Number(prompt("Enter number between 1 to 6"))
// while (randomNumber != userInput) {
//     userInput = Number(prompt("Enter number between 1 to 6"))
// }

//if we want to give only two chance to user to guess number

// let randomNumber = Math.floor(Math.random() * 5) + 1
// let userInput = Number(prompt("Enter number between 1 to 6"))
// let guess = 2
// while (guess > 0) {
//     if (randomNumber == userInput) {
//         guessNumber = true
//         break;
//     }
//     userInput = Number(prompt("Enter number between 1 to 6"))
//     guess--
//     alert(`Number of guess number remain ${guess}`)
// }

// if (guessNumber) {
//     document.write(`You guess the correct number`)
// }
// else {
//     document.write(`You guess the incorrect number`)
// }

//pgm to print even number
// let even = 1
// while (even <= 50) {
//     if (even % 2 == 0) {
//         document.write(`Even number is : ${even}</br>`)
//     }
//     even++
// }

//pgm to print odd number
// let odd = 1
// while (odd <= 50) {
//     if (odd % 2 != 0) {
//         document.write(`odd number is : ${odd} </br>`)
//     }
//     odd++
// }

//pgm to print first 10 even number
// let count = 0
// let even = 1
// while (even <= 50) {
//     if (even % 2 == 0) {
//         document.write(`Even number is ${even}</br>`)
//         count++
//         if (count == 10) {
//             break
//         }
//     }
//     even++
// }



//ternary operator =>used when there is only two ondition are given

//age>18== you can drive or you cant drive

// let age=27

// let drive=age>18?"You can drive":"You cant drive"
// console.log(drive)

//=====================================================================================================
// function add() {
//     console.log("hello")
// }
// add()

// for (let i = 0; i < 10; i++) {
//     add()
// }
//Can i call loop inside function?  Yes

// let arr = [2, 7, 9.8, 7, 6]
// function addTwo() {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i] + 3)
//     }
// }
// addTwo()

//can i call function inside loop

// for (let i = 0; i < 3; i++) {
//     function add1() {
//         console.log("hello")
//     }
//     add()
// }

// let h = "hello"
// let u = " "
// for (let i = 1; i < h.length-1; i++) {
//     u = h[i]+u
// }
// console.log(u)

// let i = 1
// while (i < h.length - 1) {
//     u = u + h[i]
//     i++
// }
// console.log(u)

// let name1 = "Mayuri"
// let blank = ""
// for (let i = 1; i < name1.length - 1; i++) {
//     blank = blank + name1[i]
// }
// console.log(blank)


// let m = "chinmay deshpande"
// let n = ""
// for (let i = 0; i < m.length; i++) {
//     if (i == 3) {
//         break
//     }
//     n = n + m[i]
// }
// console.log(n)

