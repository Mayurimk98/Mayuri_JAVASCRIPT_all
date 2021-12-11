//AJAX => Asynchronous javascript

//SYNCHRONOUS => line by line execution
//ASYNCHRONOUS => The object whise responce come first will execute first (Execution is done ranmly not lien by line)

//****Basically the javascript is synchronous in nature =>line by line execution is done****//
//****CYPRESS is Asynchronous in nature******//

//****PROGRAM1****/
// function addMe() {
//     alert('hello I am alert')
//     console.log('Hello')
//     console.log('Bye')
// }
// addMe()

//OUTPUT
/* 1. Alert popup
   2. Hello
   3. Bye */
//In this code code execution is done line by line so if u see the output on browser console, first alret is come on browser and if u tap on ok then and then only hello and bye get print
//================================================================================================================

//****PROGRAM2***/
// function addMe() {
//     console.log('Hello')
//     alert('hello I am alert')
//     console.log('Bye')
// }
// addMe()
//OUTPUT
/* 1. Hello
   2. Alert; (Until u tab on alert next output not shown onec tap on alert)
   3. Bye */

//================================================================================================================

//We can make this synchronous behavious as Asynchronous so there are two ways
// 1. SetTimeOut Function
// 2. Promises

//****PROGRAM3***/
//in settimeout function first parameter is call back function and second parameter is time in milllisecond
//setTimeout function make the sync behaviour of javascript as a asynchrous
// function sub() {
//     setTimeout(() => {
//         console.log('Hey I am mayuri')
//     }, 2000) //after 2 sec this come

//     console.log("hello One") //first come
//     console.log('Hello two') //Second come
// }
// sub()
//OUTPUT
/* 1. hello one
   2. hello two 
   //After 2 sec
   3. Hey I am mayuri */

//==============================================================================================================

//In DOM there is also image tag which make the synchronous behaviour of js as asynchronous
// console.log("katwe")
// let imgOne = document.querySelector('img')
// console.log('Mayuri')
//================================================================================================================

//In api many time what happen we passed the responce of one thing to the another thing
//so the 2 nd component is depends on the first one

//https://reqres.in/api/users?page=2 (For list of user)

//https://reqres.in/api/users/2 (For single user)
//Here insted of hard code we make  => https://reqres.in/api/users/`${id}`

//So in order to acheive this thing we useed
//1. call back function
//2. promises

//1. call back function

setTimeout(() => {
    console.log('1 sec passed') //first this executed( not depending on order or time sec 1st execute that only)

    setTimeout(() => {
        console.log('2 Sec passed') //second

        setTimeout(() => {
            console.log('3 Sec passed') //third
        }, 1000)

    }, 20000)

}, 3000)





