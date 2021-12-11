// //function without parameter without return type
// /* function add() {
//     console.log(7 + 10)
// }
// add() */
// //here value need to be declared every time as well as reused is not possible

// //============================================================================================

// //function with parameter without return type
// /* function add1(x, y) {
//     console.log(x + y)
// }
// add1(5, 6) */
// //here value can be update but we cant perform any operation with obtain value

// //=============================================================================================

// //function with parameter with return type
// /* function add2(x, y) {
//     return (x * y)
// }
// let a1 = add2(5,5)
// console.log(a1) */
// //here value can be updated also perform any operation with obtain value

// //==============================================================================================

// //function declaration
// /* function sub(x, y) {
//     return (x - y)
// }
// //console.log(sub(10,5)) OR
// let a1 = sub(10, 5)
// console.log(a1) */

// //=================================================================================================

// //function expression
// /* let sub = function (x, y) {
//     return (x - y)
// }
// console.log(sub(10, 7)) */

// //===================================================================================================

// //arrow function
// /* let mul = (x, y) => {
//     return (x * y)
// }
// console.log(mul(5, 5))//if in arrow function there is only 1 statement peresent inside block we can remove block as well as return keyword

// //As like below
// let add = (x, y) => x + y
// console.log(add(10, 20)) */

// //====================================================================================================

// // let abc="String"
// // console.log(typeof abc)

// // let abc2=10
// // console.log(typeof abc2)

// // let abc3=true
// // console.log(typeof abc3)

// // let abc4=Symbol('a')
// // console.log(typeof abc4)

// //======================================================================================================

// //for loop to print 1-10 number

// // for(let i=0;i<=10;i++){
// //     console.log(i)
// // }
// //======================================================================================================

// //for loop to print 10-0 number
// // for(let i=10;i>=0;i--){
// //     console.log(i)
// // }

// //======================================================================================================

// //let names = "mayurikatwe"
// //forward loop

// // for(let i=0;i<names.length;i++){
// //     console.log(names[i])
// // }
// //======================================================================================================

// //reverse loop
// // for(let i=names.length-1;i>=0;i--){
// //     console.log(names[i])
// // }

// //======================================================================================================

// //revrese loop with same string

// //let num = ""
// // for (let i = 0; i < names.length; i++) {
// //     num = num + names[i]  // mayurikatwe
// // }
// // console.log(num)

// //=========================================================================================================

// //let num = ""
// // for (let i = 0; i < names.length; i++) {
// //     num = names[i] + num  //ewtakiruyam
// // }
// // console.log(num)

// //==========================================================================================================

// //count the number of o present in string
// //amolanomolapote

// // let a1 = "molanomolapote"
// // count = 0
// // for (let i = 0; i < a1.length; i++) {
// //     if (a1[i] == "o") {
// //         count++
// //     }
// // }
// // console.log(count)

// //============================================================================================================

// //count the number of vowels
// // let a2 = "mayurikatwe"
// // let count = 0
// // for (let i = 0; i < a2.length; i++) {
// //     if (a2[i] == "a" || a2[i] == "e" || a2[i] == "i" || a2[i] == "o" || a2[i] == "u") {
// //         count++
// //     }
// // }
// // console.log(count)

// //=============================================================================================================

// //Array
// //push method => add the element at last and return the new length
// // let a=["mayuri","ram","sham"]
// // let b=a.push("radha")
// // console.log(a)
// // console.log(b)

// //-----------------------------------------------------------------------------------

// //pop method //remove the element from last and return the element which is remove
// // let a2=["ram","sham","bani","sunnay"]
// // let b2=a2.pop()
// // console.log(a2)
// // console.log(b2)

// //-----------------------------------------------------------------------------------

// //unshift method //add the element at first and return the new length
// // let names=["a","b","c"]
// // let abc=names.unshift("ff")
// // console.log(names)
// // console.log(abc)

// //------------------------------------------------------------------------------------

// //shift method //remove the first element from array and return the removed element only
// // let names1 = ["a", "b", "c", "d"]
// // let yyy = names1.shift()
// // console.log(names1)
// // console.log(yyy)

// //--------------------------------------------------------------------------------------

// //indexof method //give the index of given element and if not found retun (-1)

// // let fruits = ["apple", "banana", "pynapal", "grapes"]
// // let abc = fruits.indexOf("grapes")
// // console.log(abc)

// // let market = ["apple", "banana", "pynapal", "grapes", "mango"]
// // let userInput = "banana"
// // if (market.indexOf(userInput) >= 1) {
// //     console.log("Fruits Available")
// // }
// // else {
// //     console.log("Fruits not Available")
// // }

// //-----------------------------------------------------------------------------

// //reverse Method =>revrese the element in array and return the array only
// // let arr=[1,2,3,4,5,6,7,8,9]
// // let y=arr.reverse()
// // console.log(y)

// //===========================================================================

// //sort method => sort the element from array and return the array only
// // let arr=[1,3,4,5,6,7,8,9,55]
// // console.log(arr.sort())

// //============================================================================

// //flat method =>combine all array in multidimentional array and retirn single array
// // let ab=[[1,7,9],[9,6,5],[8,6,5]]
// // console.log(ab.flat())

// //==============================================================================

// //include method =>find the element in array if found give boolean means true or false
// // let fruits = ["mango", "banana", "grapes", "paynapal"]
// // let aa = fruits.includes("mango")
// // console.log(aa)

// //=============================================================================

// //join method //join the all element in array and return the array

// // let arr=[1,2,3,4,5,6,7,8]
// // let a1=arr.join("-")
// // console.log(a1)

// //==================================================================================

// //map method //perform operation with each element of array and return array
// // let a1 = [1, 2, 2, 4, 5, 6, 7, 8, 9, 4, 3, 3, 4, 5, 6, 7, 8, 9, 10]
// // let a2 = []
// // let b1=a1.map((el,index,arr)=>el+2)
// // console.log(b1)

// //=================================================================================

// // //filter method
// // let a3=[2,3,4,5,6,7,8,9,0]
// // let b1=a3.filter((el,index,array)=>el>5)
// // console.log(b1)

// //=================================================================================

// //reduce method
// // let arr = [20, 40, 30, 50, 60, 70, 43, 54, 33]
// // let aa = arr.reduce(function (acc, el, index, arr) {
// //     return acc + el
// // }, 0)
// // console.log(aa)

// //=================================================================================

// //foreach method //perform the operation with each element 
// // let student = ["mayu", "tayu", "sayu"]
// // student.forEach(function (el) {
// //     console.log(`Welcome ${el} !`)
// // })

// //================================================================================
// //find method =>find the first coming elemnet in array and return the value
// // let student = [2,5,6,7,8,9,,5,6,7]
// // let mm=student.find(function(el){
// //     return el > 1
// // })
// // console.log(mm)

// //================================================================================

// // let abc = [
// //     { fullname: "mayu", age: 23 },
// //     { fullname: "tayu", age: 34 },
// //     { fullname: "mayu", age: 99 }
// // ]
// // let yy=abc.find(function(el){
// //     return el.fullname=="mayu"
// // })
// // console.log(yy)

// //==========================================================================================
// //findindex method

// // let abc = [
// //         { fullname: "mayuri", age: 23 },
// //         { fullname: "tayu", age: 34 },
// //         { fullname: "mayu", age: 99 }
// //     ]
// //     let yy=abc.findIndex(function(el){
// //         return el.fullname=="mayu"
// //     })
// //     console.log(yy)

// //===========================================================================================
// //some method

// // let ae=[8,9,4,5,6,7,8,9]
// // let a1=ae.some((el)=>el>6)
// // console.log(a1)

// //============================================================================================
// //every method
// // let ae=[8,9,4,5,6,7,8,9]
// // let a1=ae.every((el)=>el>6)
// // console.log(a1)

// //==========================================================================================

// //concat method
// // let a=[2,3,4]
// // let b=[4,5,6]
// // console.log(a.concat(b))

// //===========================================================================================


// //slice method
// // let a1=[1,2,3,4,5,6]
// // console.log(a1.slice(2,5))

// //======================================================================================

// // //splice
// // let a1=[1,2,3,4,5,6]

// // let b1=a1.splice(1,2,99,200)
// // console.log(b1)
// // console.log(a1)

// //==========================================================================================================


// //Array methods

// //1. push method

// // let a=[1,2,3,4,5]
// // let b=a.push(6) //add new element at last and return the new length
// // console.log(a) //[1,2,3,4,5,6]
// // console.log(b) //6
// //------------------------------------------------------------------------------------

// //2. pop method

// // let a1=[1,2,3,4,5]
// // let b1=a1.pop()
// // console.log(b1) //remove last element from array and return the remove element itself //5
// // console.log(a1) //[1,2,3,4]
// //-------------------------------------------------------------------------------------

// //3. Unshift method

// // let a1=[1,2,3,4,5]
// // let b1=a1.unshift(10) //add given element at first and return new length
// // console.log(b1) //6
// // console.log(a1) //[10,1,2,3,4,5]
// //-------------------------------------------------------------------------------------

// //4. shift method

// // let a1=[1,2,3,4,5]
// // let b1=a1.shift() //remove the first element from array and return the removed element only
// // console.log(b1) //1
// // console.log(a1) //[2,3,4,5]
// //--------------------------------------------------------------------------------------

// //5. revrese method

// // let a=[4,5,6,7,8]
// // let b=a.reverse() //revrese the element in array and return the new array only
// // console.log(b) //[8,7,6,5,4]
// //----------------------------------------------------------------------------------------

// //6. join method

// // let a=[1,2,3,4,5]
// // let b1=a.join("=") //join the all element in array and return string
// // console.log(b1) //1=2=3=4=5
// //----------------------------------------------------------------------------------------

// //7. flat method
// // let a1=[[1,2,3],[3,4,5]]
// // let b1=a1.flat() //convert the multdimentional array into single array and return th array 
// // console.log(b1) //[1,2,3,4,5]
// //-------------------------------------------------------------------------------------------

// //8. Map method
// // let a=[10,20,30,90,40,50]
// // let b1=a.map(function(el,index,array){     //perform the operation with each element and return the array only
// //     return el+2                                 
// // })
// // console.log(b1) //[12,22,32,92,42,52]
// //-------------------------------------------------------------------------------------------------

// //9. filter method
// // let a=[2,3,4,5,6,7,8,9]
// // let b1=a.filter(function(el,index,array){  //comapare the condition whith each element and return the array only
// //     return el>4
// // })
// // console.log(b1) //[5,6,7,8,9]
// //---------------------------------------------------------------------------------------------------

// //10. reduce method
// // let a1=[1,2,3,4,5]
// // let b1=a1.reduce(function(acc,el,undex,array){ //reduce array into single numbr and return the number only
// //     return acc+el
// // },0)
// // console.log(b1) //15
// //--------------------------------------------------------------------------------------------------

// //11. find method
// // let a=[2,3,4,5,6,7]
// // let b1=a.find((el)=>el>2) //compare the given element with each element in array and return first element where condition get satisfied
// // console.log(b1) //3
// //----------------------------------------------------------------------------------------------------

// //12.findIndex method
// // let a=[1,2,3,4,5,6]
// // let b=a.findIndex((el)=>el==3) //compare the given element with each element in array and return the first coming element index
// // console.log(b) //2
// //-----------------------------------------------------------------------------------------------------

// //13. forEach method
// // let names=["mayu","tayu","rayu","sayu"]
// // let mm=names.forEach(function(el){  //perform the operation with each element and return the string
// //     console.log(`welcome ${el}`)

// // })
// //------------------------------------------------------------------------------------------------------

// //14. indexof method
// // let a=[1,2,3,4,5]
// // let b=a.indexOf(9)//find the index on given element and return the index if not found return -1
// // console.log(b)

// //------------------------------------------------------------------------------------------------------

// //15. include method

// // let a=[1,2,3,4,5,6]
// // let b=a.includes(1) //find th element in array if found returns true elase return false
// // console.log(b)
// //----------------------------------------------------------------------------------------------

// //16. slice method

// // let a=[1,2,3,4,5,6]
// // console.log(a.slice(1,3)) //cute the array from given index number and return the remove element array [2,3]
// //---------------------------------------------------------------------------------------------

// //17. splice

// // let a=[1,2,3,4,5,6,7]
// // let b1=a.splice(1,2,33,44) //remove the given number from array and return ne length 7
// // console.log(b1)
// // console.log(a)

// //18. concat
// // let a=[1,2,3]
// // let b=[4,5,6]
// // console.log(a.concat(b))

// //19. sort 
// // let a=[1,9,7,6,54]
// // console.log(a.sort())

// //20 some

// // let a1=[1,2,3,4,5,6]
// // let a2=a1.some((el)=>el>2)
// // console.log(a2)

// //21 every
// // let a2=[3,4,5,6,7,8,9]
// // let b2=a2.every((el)=>el>9)
// // console.log(b2)

// // console.log(a2.length)

// //=========================================================================================

// //string method
// // let m="mayuri"
// // console.log(m.length)

// //1. touppercase method=>convert all char in string to uppercase and return new string
// // let a=m.toUpperCase() 
// // console.log(a)

// // //2. toLowercase method => convert all char in string to lowercase and return string
// // let a1="THankYoU"
// // let b1=a1.toLowerCase()
// // console.log(b1)

// // //3. Slice method => cut the string from desired index and return new string
// // let s1="IlearnJs"
// // let z1=s1.slice(1,6)
// // console.log(z1)

// //let names="mayuri mahendra katwe"
// // let count=0
// // for(let i=0;i<names.length;i++){
// // if(names[i]=="a"){
// //     count++
// // }
// // }
// // console.log(count)

// // let rev=""
// // for(let i=0;i<names.length;i++){
// //     rev=names[i]+rev
// // }
// // console.log(rev)

// // console.log(names[0].toUpperCase()+names.slice(1))

// // let str=""
// // for(let i=0;i<names.length;i++){
// //     if(i==0){
// //         str=str+names[i].toUpperCase()
// //     }
// //     else{
// //         str=str+names[i]
// //     }
// // }
// // console.log(str)

// //4. indexOf Method
// // let a="merineedrive"
// // console.log(a.indexOf("e",2)) //5

// // //first occarnace 
// // console.log(a.indexOf("e",0))

// // //second occarance
// // console.log(a.indexOf("e",a.indexOf("e",0)+1))

// // //third occarance

// // console.log(a.indexOf("e",a.indexOf("e",a.indexOf("e",0)+1)+1))

// //find index by using loop
// // let str = "mayuarimayauria"
// // let arr = []
// // for (let i = 0; i < str.length; i++) {
// //     if (str[i] == "a") {
// //         arr.push(i)
// //     }
// // }
// // console.log(arr)
// // console.log(arr[1])

// //5. include method
// // let str="mayurimkatwe"
// // console.log(str.includes("yurim"))


// //6. replace method
// // let str="mayurikatwe"
// // console.log(str.replace("mayuri","mahendra"))

// //7. trim method

// // let nam="   avi shan bhala     "
// // console.log(nam.length)
// // // console.log(nam.trim().length)

// // // console.log(nam.trimLeft().length)
// // // console.log(nam.trimRight().length)

// // console.log(nam.trim().split(" ").join(""))

// //8. startwith
// // let str="mayuri"
// // console.log(str.startsWith("m"))

// // //9.endwith
// // console.log(str.endsWith("i"))

// //10.repeat method
// // let m = "mayuri"
// // console.log(m.repeat(5))

// // let str = "5a4b3c2e1d"
// // yy = ""
// // for (let i = 0; i < str.length; i++) {
// //     if (Number(str[i])) {
// //         yy = yy + str[i + 1].repeat(Number(str[i]))
// //     }
// // }
// // console.log(yy)


// // let va = "aaaaabbbbccceed"
// // let count = 0
// // let fnl = ""
// // for (let i = 0; i < va.length; i++) {
// //     count++
// //     if (va[i] != va[i + 1]) {
// //         fnl = fnl + count + va[i]
// //         count = 0
// //     }
// // }
// // console.log(fnl)

// //================================================================================================================

// //STRING METHODS

// //1. toUppercase  Method =>convert all char of string into upperecase return the string only
// // let str="mayuri"
// // console.log(str.toUpperCase())

// //-------------------------------------------------------------------------------------------------

// //2. to Lowercase method =>convert all chat of string in lowercase and return string only
// // let str1="MAYURI"
// // console.log(str1.toLowerCase())

// //--------------------------------------------------------------------------------------------------

// //3. Slice Method =>cut the given string accourdig to given index and return the string only
// // let str = "mayurikatwe"
// // console.log(str.slice(2, 6))

// //--------------------------------------------------------------------------------------------------

// //4. replace method =>replece the string with given char and return string only
// // let str="mayurikatwe"
// // console.log(str.replace("mayu","taryu"))

// //--------------------------------------------------------------------------------------------------

// //5. trim method =>remove the extra space from both side of string and retun the string only
// // let str = " mayur katwe "
// // console.log(str.trim())

// //5.1 trim left =>remove the extra space from left return the string
// // console.log(str.trimLeft())

// //5.2 trim right =>remove the extra space from right and return the string
// // console.log(str.trimRight())

// //----------------------------------------------------------------------------------------------------
// //5.3 to remove all space in middle also
// // let str=" mayuri katwe "
// // console.log(str.trim().split(" ").join("")) //mayurikatwe

// //-----------------------------------------------------------------------------------------------------

// //6. indexOf method //find the index of given char and return the index 
// // let str="mayuri katwe mayu"
// // console.log(str.indexOf("a")) //first occrance

// // console.log(str.indexOf("a",str.indexOf("a")+1)) //second occrance

// // console.log(str.indexOf("a",str.indexOf("a",str.indexOf("a")+1)+1)) //third occarance

// //-----------------------------------------------------------------------------------------------------

// //7. includes Method =>find the given string avaialable in given string and return boolean
// // let str="mayurikatwe"
// // console.log(str.includes("yuri"))

// //-----------------------------------------------------------------------------------------------------

// //8. replace method =>replace the given string with replace string and return the string only
// // let str = "jayuyurimayukatwe"
// // console.log(str.replace("mayu", "tayuri"))

// //----------------------------------------------------------------------------------------------------

// //10. CharAt method =>give the chat at given index and return the character only
// // let str="mayuri"
// // console.log(str.charAt(2))

// //----------------------------------------------------------------------------------------------------

// //11. charCodeAt method =>give the ascii value of character of given index
// // let str="mayurimkatwe"
// // console.log(str.charCodeAt(2))

// //----------------------------------------------------------------------------------------------------

// //12.repeate method =>repeate the string with given number count and retun the string
// // let str="mayurikatwe"
// // console.log(str.repeat(5))

// //----------------------------------------------------------------------------------------------------

// //13. startwith method =>check the string start with given char or not and return the bbolean
// // let str="mayuri"
// // console.log(str.startsWith("m"))

// //-----------------------------------------------------------------------------------------------------

// //14. endWith method
// // let str="mayuri"
// // console.log(str.endsWith("i"))

// //------------------------------------------------------------------------------------------------------

// //object

// // let market = {
// //     apple: 20,
// //     banana: 30,
// //     santra: 40,
// //     paynapale: 50,
// //     localMartket: function () {
// //         console.log("appleonly")
// //     }
// // }

// // console.log(market)

// //retriving the values there are 2 method dot notation and braket notation
// // console.log(market.apple)
// // console.log(market['apple'])


// //adding the new values
// // market.orange=100
// // console.log(market)

// //update the va;ue
// // market.orange=200
// // console.log(market)

// //delete the value
// // delete market.orange
// // console.log(market)

// // for(let key in market){
// //     console.log(key)  //print only keys
// // }

// // for(let values in market){
// //     console.log(market[values]) //print values
// // }

// // for(let key in market){
// //     console.log(key,market[key]) //print both key and value
// // }

// // //has 
// // console.log(market.hasOwnProperty("apple"))

// // let str="aaaabbbbbdddgggggyyyyy"
// // // ab={
// // //     a:5,
// // //     b:3
// // // }
// // let count=0
// // let obj={}
// // for(let i=0;i<str.length;i++){
// //     if(obj.hasOwnProperty(str[i])){
// //         obj[str[i]]=obj[str[i]]+1
// //     }
// //     else{
// //         obj[str[i]]=1

// //     }
// // }

// // console.log(obj)


// //=============================================================================================

// // let person = {
// //     firstName: "Mayuri",
// //     lastName: "katwe",
// //     age: 23,
// //     display: function () {
// //         console.log(`My name is ${this.firstName}`)
// //     }

// // }
// // person.display()

// //===============================================================================================


// //Object

// // let human = {
// //     fullName: "mayuri",
// //     age: 23,
// //     display() {
// //         console.log("hello")
// //     }
// // }

// // //hasOwnProperty =>Check whetehre key is avaiable or not and return boolean value
// // console.log(human.hasOwnProperty("fullName"))

// // //Retriving the value
// // console.log(human.fullName) //dot notation
// // console.log(human['fullName']) //bracket notation

// // //Updating the value
// // human.fullName="Ganesha"
// // human.age=40
// // console.log(human)

// // //Adding the value
// // human.langauge="marathi"
// // human.color="white"
// // console.log(human)

// // //Delete value
// // delete human.color
// // console.log(human)

// // //for loop for key in object
// // for(let key in human){
// //     console.log(key)
// // }

// // //for loop for value in object
// // for(let value in human){
// //     console.log(human[value])
// // }

// // //For loop for all key and value
// // for(let key in human){
// //     console.log(key,human[key])
// // }

// //==================================================================

// // let human={
// //     fullName:"mayuri",
// //     age:23,
// //     display:function(){
// //         console.log(`My Name is ${this.fullName}`) //My Name is Mayuri
// //     }
// // }
// // human.display()

// //==================================================================================

// // let human={
// //     fullName:"mayuri",
// //     age:23,
// //     display:()=>console.log(`My Name is ${this.fullName}`) //My Name is undefine =>arrow function take parent object of current calling object
// // }

// // human.display()

// //============================================================================================================

// //let str="aaaaacccccbbbbbeeeeffff"
// // a1={
// //     a:5,
// //     b:4,
// //     c:5
// // }

// // obj={}
// // for(let i=0;i<str.length;i++){
// //     if(obj.hasOwnProperty(str[i])){
// //        obj[str[i]]=obj[str[i]]+1 //a:1+1=>a:2
// //     }
// //     else{
// //         obj[str[i]]=1   //a:1
// //     }
// // }
// // console.log(obj)

// //============================================================================================

// // let mayuri = {
// //     fullName: "mayuri",
// //     age: 23,
// //     talk() {
// //         console.log(`Hello ${this.fullName} `)
// //     }
// // }
// // mayuri.talk() //hello mayuri


// //---------------------------------------------------------------------------------------

// // let x = 10
// // function add() {
// //     //x = 30
// //     console.log(x) //30
// //     x = 40
// //     console.log(x) //40
// // }
// // add()
// // console.log(x) //10

// // var  x1=10
// // function add(){
// //     console.log(x1)
// // }
// // console.log(x1)
// // add()

// // {
// //     let a1=100
// //     console.log(a1) //100
// // }
// // console.log(a1)//not defined

// //-----------------------------------------------------------------------
// // {
// //     const a2=200
// //     console.log(a2)
// // }
// // console.log(a2)

// //==========================================================================
// // {
// //     var m1=100
// //     console.log(m1)
// // }
// // console.log(m1)


// //let and const having block scope so if we declare variable inside block and print its value outside of block it gives the variable is not defined error but var having function scope

// // let p=10
// // {
// //     p=20
// //     console.log(p) //20
// // }
// // console.log(p) //20


// // let p=10
// // {
// //     let p=20
// //     console.log(p) //20
// // }
// // console.log(p) //10

// // var f=10
// // function add(){
// //     var f=30
// //     console.log(f)
// // }
// // console.log(f) //10
// // add() //30

// //var having the function scope so if declared variable outside of function it cant atke value which is inside function

// // var f=10
// // function add(){
// //     var f=30
// //     console.log(f)
// // }
// // add()  //30
// // console.log(f) //10


// // let f=10
// // function add(){
// //     let f=30
// //     console.log(f) //30
// // }
// // add()  
// // console.log(f) //10

// // let y1=100
// // var x1=400
// // function add(){
// //     let y1=70
// //      x1=40
// //     console.log(x1) //40
// //     console.log(y1) //70
// //     y1=80
// //     {
// //         console.log(y1) //80
// //     }
// // }
// // console.log(y1) //100
// // add()
// // console.log(x1) //40

// // let clock={
// //     count:0,
// //     display:function(){
// //        return  ++this.count

// //     }
// // }
// // console.log(clock.display())//0


// //let arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 6]
// // arr.filter((el,index)=>arr.indexOf(el)==index)

// // let ma=arr.filter(function(el,index){
// //     return arr.indexOf(el)==index
// // })
// // console.log(ma)

// // let a1=[]
// // let b1=[]
// // for(let i=0;i<arr.length;i++){
// //     if(a1.indexOf(arr[i])<=0){
// //         a1.push(arr[i])
// //     }
// //     else{
// //         b1.push(arr[i])
// //     }
// // }
// // console.log(a1)
// // console.log(b1)

// //==========================================================================================

// // var globle = "mayuri"
// // console.log(window.globle)


// // var globle="mayuri"
// // console.log(window.globle)

// // names="mayurik"
// // console.log(window.names)

// // // alert()
// // // window.alert()


// // function check(){
// //     console.log(this==window)
// // }
// // check()  //this is also globly defined and window also so this==window


// // let bike = {
// //     brand: "KTM",
// //     getBrand: function () {
// //         return this.brand
// //     }
// // }
// // console.log(bike.getBrand) //return the function only
// // let mm=bike.getBrand()
// // console.log(mm)

// // let mm=bike.getBrand
// // console.log(mm()) //refrence of this get moved 

// // let r1 = bike.getBrand.bind(bike)
// // console.log(r1())


// ///==============================================================

// // let market={
// //     price:100,
// //     fruits:"All",
// //     print:function(){
// //  return this.price
// //     }
// // }

// // let apple={
// //     price:60
// // }
// // let banana={
// //     price:80
// // }

// // let applePrice=market.print.bind(apple)
// // console.log(applePrice())

// // let bananaPrice=market.print.bind(banana)
// // console.log(bananaPrice())

// //=======================================================================

// //call method


// // let bike = {
// //     brand: "KTM",
// //     getBrand: function () {
// //         return this.brand
// //     }
// // }

// // let audi = {
// //     brand: "audi"
// // }

// // let maruti = {
// //     brand: "maruti"
// // }

// // let audi1=bike.getBrand.call(audi)
// // console.log(audi1)

// // console.log(bike.getBrand.call(maruti))

// // //==========================================================

// // //apply method

// // let friend={
// //     firstName:"mayuri"
// // }

// // let friend1={
// //     firstName:"sonali"
// // }

// // let greeting={

// // wlcm:function greet(val1,val2){
// //     return(val1+" " + this.firstName +" " +val2+" "+this.firstName )
// // }
// // }
// // let mm=greeting.wlcm.call(friend,"welcome","hello")
// // console.log(mm)


// // let uu=greeting.wlcm.apply(friend1,['godbye','sd'])
// // console.log(uu)

// // let master={
// // sum:function add(a,b,c){
// //     console.log(a+this.val+b+this.val+c+this.val)
// // }
// // }

// // let obj1={
// //     val:12
// // }

// // let obj2={
// //     val:30
// // }

// // let m1=master.sum.bind(obj1,"this is","that is","hello")
// // m1()


// // let human={
// //     display(prop1,prop2){
// //     console.log(this.name+" " +prop1+" "+prop2)
// //     }
// // }

// // let mayu={
// //     name:"Mayurik"
// // }

// // let jayu={
// //     name:"jaymalaT"
// // }

// // let a1=human.display.bind(mayu,"kind &","helpfull")
// // a1()

// // let aa1=human.display.bind(jayu,"rude &" ,"Selfish")
// // aa1()


// //========================================================================

// // let human={
// //     display(prop1,prop2){
// //     console.log(this.name+" " +prop1+" "+prop2)
// //     }
// // }

// // let mayu={
// //     name:"Mayurik"
// // }

// // let jayu={
// //     name:"jaymalaT"
// // }

// // human.display.call(mayu,"kind","good")

// //============================================
// // let human={
// //     display(prop1,prop2){
// //     console.log(this.name+" " +prop1+" "+prop2)
// //     }
// // }

// // let mayu={
// //     name:"Mayurik"
// // }

// // let jayu={
// //     name:"jaymalaT"
// // }

// // human.display.apply(jayu,["good","bad"])

// //==========================================================================================

// // let person={
// //     fullName:"Mayuri",
// //     age:34,
// //     display:function(){
// //         return [12,13]
// //     }
// // }
// // let [a,b]=person.display()
// // console.log(a)
// // console.log(b)

// //=========================================================================================

// // let add=function(){
// //     return 12+10
// // }

// // let a=function(){
// //     return 12+10
// // }

// // let addition=function(a){
// //     return a //22
// // }

// // //let fn=
// // console.log(addition(add)) //addition(function(){
// //                     // return 12+10
// //                            //})
// //                            //console.log(fn)
// // // let add1=fn() //22
// // // console.log(add1)//22


// //======================================================================================================

// // let add=function(){
// //     return 10+12
// // }

// // let a=function(){
// //     return 10+12
// // }

// // let addition=function(a){
// //     return a
// // }

// // let fn=addition(add) //as it return the function itself its value is function only
// // console.log(fn())   //22

// //=====================================================================================================

// // let person = {
// //     fullName: "mayuri",
// //     age: 23,
// //     display: function () {
// //         return this.fullName
// //     }
// // }

// // let l1=person.display()
// // console.log(l1) //mayuri

// // let l2=person.display
// // console.log(l2) //  function () {
// //                 // return this.fullName
// //                 // }
// // console.log(l2()) //undefined   cause as we store value of obkect the refrence of this get dismissed

// //this methods=>bind/call /apply

// //bind method => make the copy of function and set this keyword
// //call and apply => set this keyword and call function immediately

// // let person={
// //     fullName:"Mayuri",
// //     age:23,
// //     display:function(){
// //         return this.age
// //     }
// // }

// // let m1=person.display.bind(person)
// // console.log(m1()) //23


// // function greet(){
// //     return this.name
// // }

// // let mayu={
// //     name:"mayuri"
// // }

// // let asd=greet.bind(mayu)
// // console.log(asd())

// //=======================================================================

// // function greet(){
// //     return this.name
// // }

// // let mayu={
// //     name:"mayuri"
// // }

// // console.log(greet.call(mayu))

// //==============================================================================


// // function greet(val1,val2){
// //     return (val1+" " +this.name +" "+val2+" "+this.name)
// // }

// // let mayu={
// //     name:"mayuri"
// // }

// // console.log(greet.call(mayu,"wlcm","gM"))


// //====================================================================

// // function greet(arr){
// //     return (arr[0]+" " +this.name +" "+arr[1]+" "+this.name)
// // }
// // array=["good Morning","Good Night"]

// // let mayu={
// //     name:"mayuri"
// // }

// // console.log(greet.apply(mayu,[...[array]]))

// //====================================================================
// // var age = 23
// // let human = {
// //     fullName: "mayuri",
// //     lastName: "Katwe",
// //     age: 23,
// //     display: function () {
// //         console.log(this.age)

// //         function greet() {
// //             console.log(this.age)
// //         }
// //     },

// //     greet()
// // }

// // console.log(human.display())





// // let person = {
// //     id: 1,
// //     mail: "dinga@gmail.com",
// //     display: function () {
// //         console.log("wlcm" + this.id) //1

// //         function dinga() {
// //             console.log("wlcm" + this.id)//undefined
// //         }
// //         dinga()
// //     }
// // }
// // person.display()


// // let person = {
// //     id: 1,
// //     mail: "dinga@gmail.com",
// //     display: () => {console.log("wlcm" + this.id) //1

// //          dinga=()=>console.log("wlcm" + this.id)//undefined

// //         dinga()
// //     }
// // }
// // person.display()

// //===================**************************=======================================

// // let id=100
// // let person = {
// //     id: 1,
// //     mail: "dinga@gmail.com",
// //     display: function () {
// //         console.log("wlcm" + this.id) //wlcm1

// //         function dinga() {
// //             console.log("wlcm" + this.id)//wlcm100
// //         }
// //         dinga()
// //     }
// // }
// // person.display()


// // var id=100
// // let person = {
// //     id: 1,
// //     mail: "dinga@gmail.com",
// //     display: function () {
// //         console.log("wlcm" + this.id) //1

// //         let dinga=() =>{
// //             console.log("wlcm" + this.id)//1
// //         }
// //         dinga()
// //     }
// // }
// // person.display()


// // var id=100
// // let person = {
// //     id: 1,
// //     mail: "dinga@gmail.com",
// //      display:()=> {
// //         console.log("wlcm" + this.id) //wlcm100

// //         let dinga=() =>{
// //             console.log("wlcm" + this.id) //wlcm100
// //         }
// //         dinga()
// //     }
// // }
// // person.display()

// //=================***********************/////////////////////////////////////

// //function declartaion
// // var nam = "mayu"
// // let g = {
// //     nam: "chinmay",
// //     age: 23,
// //     display: function () {
// //         console.log("welcome" + this.nam)//wlcomechinmay
// //         function greet() {
// //             console.log("welcome" + this.nam)//wlcomemayu  //globle scope
// //         }
// //         greet()
// //     }


// // }
// // g.display()

// //===================================================================

// //var nam="mayu"
// // let g={
// //     nam:"chinmay",
// //     age:23,
// //     display:function(){
// //         console.log("welcome"+this.nam) //wlcomechinmay
// //         let greet=function(){
// //             console.log("welcome"+this.nam) //wlcomechinmay
// //         }
// //         greet()
// //     }

// // }
// // g.display()

// //===================================================================

// // var nam="mayuri"
// // let g={
// //     nam:"chinmay",
// //     age:23,
// //     display:()=>{
// //         console.log("welcome"+this.nam)//globle scope gheto var asel tr ani let asel tr undefined
// //         let greet=()=>{
// //             console.log("welcome"+this.nam) //globle scope gheto var asel tr ani let asel tr undefined
// //         }
// //         greet()
// //     }


// // }
// // g.display()

// //=======================================================================



// // var nam="mayuri"
// // let g={
// //     nam:"chinmay",
// //     age:23,
// //     display:()=>{
// //         console.log("welcome"+this.nam)//elcmmayuri
// //         let greet=function(){
// //             console.log("welcome"+this.nam) //wlcomemayuri
// //         }
// //         greet()
// //     }


// // }
// // g.display()



// //donhi function declaration asel tr first vala curent calling gheto and second wala globle gheto jar globl emadhe var asel tr nahitr undefined

// //jar pahila function declarion asel ani dusra arrow function asel tr pahila curent calling gheto ani dusra current calling cha object gheto mhanun doghikade same output

// //jar donhi arrow function asel tr globle object madhlya variable chi value deto


// //=======================Object pract 27====================================================


// // let person={
// //     fullName:"Mayuri",
// //     LastName:"Katwe",
// //     family:{
// //         Mother:"Jayu",
// //         Father:"Mahendra"
// //     }
// // }

// //CURD operation
// //retriving the property
// //1. dot notation
// // console.log(person.fullName)//Mayuri
// // console.log(person.family.Mother) //jayu

// // //2. bracket notation
// // console.log(person['fullName']) //Mayuri
// // console.log(person['family']['Father']) //Mahendra

// //=================================================
// //creating the property

// // person.family.sister="Vaibhavi"
// // console.log(person)

// // //updating property
// // person.fullName="Sonam"
// // person.family.Father="Rakesh"
// // console.log(person)

// // //deleting property
// // delete person.fullName
// // delete person.family['Father']
// // console.log(person)

// //================================================================

// // for(let key in person){
// //     console.log(key,person[key])
// // }

// //================================================================
// //hasOwnProperty

// // console.log(person.hasOwnProperty("fullName"))


// // a=aaaaabbbbbcccddddeeeeeeff
// // a={a:5,b:4,c:3,d:2}
// // let str="aaaaabbbbbcccddddeeeeeeff"
// // let a={}
// // for(let i=0;i<str.length;i++){
// //     if(a.hasOwnProperty(str[i])){
// //         a[str[i]]=a[str[i]]+1
// //     }
// //     else{
// //         a[str[i]]=1
// //     }
// // }
// // console.log(a)

// //===============================================================

// //object this

// // let bike = {
// //     model: "Honda",
// //     color: "Red",
// //     id: 250,
// //     start: function () {
// //         return this.model
// //     }
// // }
// // console.log(bike.start())
// // console.log(bike.start)

// // let a = bike.start
// // console.log(a)
// // console.log(a())

// //bind method
// // let yu=bike.start.bind(bike)
// // console.log(yu())

// //callmethod

// // let bike = {
// //     model: "Honda",
// //     color: "Red",
// //     id: 250,
// //     start: function (ar1,ar2) {
// //         return ar1+this.model+ar2+this.model
// //     }
// // }
// // let ab=bike.start.call(bike,"GM","GN")
// // console.log(ab)

// //Aplly method

// // let bike = {
// //     model: "Honda",
// //     color: "Red",
// //     id: 250,
// //     start: function (ar1) {
// //         return (ar1[0]+this.model+ar1[1]+this.model)
// //     }
// // }
// // let arr1=["GM","GN","SD"]
// // // let ab=bike.start.call(bike,[arr1[0],arr1[1]])
// // // console.log(ab)

// // let ab=bike.start.apply(bike,[...[arr1]])
// // console.log(ab)


// // let human = {
// //     fullName: "Mayuri",
// //     lastName: "Katwe",
// //     display: function () {
// //         console.log(this.fullName) //Mayuri

// //         function greet() {
// //             console.log(this.fullName) //Undefined
// //         }
// //         greet()
// //     }
// // }
// // human.display()

// // var fullName="Ganesha"
// // let human = {
// //     fullName: "Mayuri",
// //     lastName: "Katwe",
// //     display: function () {
// //         console.log(this.fullName) //Mayuri

// //         function greet() {
// //             console.log(this.fullName) //Ganesha(display on window)
// //         }
// //         greet()
// //     }
// // }
// // human.display()



// // var fullName="Ganesha"
// // let human = {
// //     fullName: "Mayuri",
// //     lastName: "Katwe",
// //     display: function () {
// //         console.log(this.fullName) //Mayuri

// //         greet=function() {
// //             console.log(this.fullName) //Ganesha(display on window)
// //         }
// //         greet()
// //     }
// // }
// // human.display()


// // var fullName="Ganesha"
// // let human = {
// //     fullName: "Mayuri",
// //     lastName: "Katwe",
// //     display: function () {
// //         console.log(this.fullName) //Mayuri

// //         greet=()=> {
// //             console.log(this.fullName) //Mayuri
// //         }
// //         greet()
// //     }
// // }
// // human.display()




// // var fullName="Ganesha"
// // let human = {
// //     fullName: "Mayuri",
// //     lastName: "Katwe",
// //     display:  ()=> {
// //         console.log(this.fullName) //Ganesh(window)

// //         greet=()=> {
// //             console.log(this.fullName) //Ganesh(window)
// //         }
// //         greet()
// //     }
// // }
// // human.display()


// // var fullName="Ganesha"
// // let human = {
// //     fullName: "Mayuri",
// //     lastName: "Katwe",
// //     display:  ()=> {
// //         console.log(this.fullName) //Ganesh(window)

// //         greet=()=> {
// //             console.log(this.fullName) //Ganesh(window)
// //         }
// //         greet()
// //     }
// // }
// // human.display()

// //===============================================================



// // class person{
// //     constructor(fullName,lastName){
// //        this.fullName=fullName
// //        this.lastName=lastName}

// //     display(){
// //         console.log(`My firsname is ${this.fullName}`)

// //     }
// // }

// // let amol=new person("amol","goswami")
// // amol.display()
// // console.log(amol)

// // let viru=new person("virendra","devenpalli")
// // console.log(viru)

// // viru.display()

// // class human {
// //     fullname = null
// //     lastname = null
// //     age = null
// //     setFullname(a) {
// //         console.log(a)
// //     }
// //     setLastname(b) {
// //         console.log(b)
// //     }
// //     setage(c) {
// //         console.log(c)
// //     }
// // }

// // let cat = new human()
// // console.log(cat)

// // cat['fullname'] = "Mayu"
// // console.log(cat)
// // cat.setFullname("mayurik")

// // class human {
// //     constructor(fullName, lastName) {
// //         this.fullName = fullName
// //         this.lastName = lastName
// //     }
// //     display() {
// //         console.log(`My surname is ${this.lastName}`)
// //     }
// // }
// // let renu = new human("renuka", "waghmare")
// // console.log(renu)

// // renu.display()


// //**********************************REGULAR EXPRESSION**********************************//

// //let one=new RegExp("python");

// // let x1="I like js and Python but practice only python"
// // let one=/python/ig;
// // console.log(x1.search(one)) //give the starting index of frist char in given string

// // console.log(x1.match(one))

// // console.log(x1.replace(one,"javscript"))


// // aa=/pune/
// // a2=/^v/
// // let names=["mayu-pune","sonali-nashik","vaidehi-shajapur","somesh-surat"]
// // console.log(names.filter((el)=>aa.test(el)))//[ true, false, false, false ]

// // // console.log(aa.test(names[0]))
// // // frompune = names.filter(function (el) {
// // //     return aa.test(el)
// // // })
// // // console.log(frompune)

// // console.log(names.filter((el)=>a2.test(el)))
// //let aa3=/^.....$/
// //et arr1=["amol","archit","radhe"]
// // let aaa=arr1.filter((el)=>aa3.test(el))
// // console.log(aaa)


// // let a4=/^[a][r]/
// // let aaa=arr1.filter((el)=>a4.test(el))
// // console.log(aaa)


// // let a4=/^[7].{8}[5]$/
// // let mob=["7745070870","9922899456","546783903456","7564890345"]
// // let kk=mob.filter((el)=>a4.test(el))
// // console.log(kk)



// // let num=["7745045298","7721054356","7689905647382902","9877890666"]
// // a1=/[\d][\d].{8}$/
// // let mm=num.filter((el)=>a1.test(el))
// // console.log(mm)



// // let num=["7745045298","7721054356","7689905647382902","9877890666","asdfghjklz"]
// // a1=/[\D][\D].{8}$/
// // let mm=num.filter((el)=>a1.test(el))
// // console.log(mm)


// // let a1="adf@#$%671234&*"
// // let a2=/\W/
// // let mm1=a1.split("").filter((el)=>a2.test(el))
// // console.log(mm1)
// // let yy=mm1.join("")//.length
// // console.log(yy)


// //====================*********************=====================================================
// //Regular expression

// // let str="I started to learn Javascript and javascript is best lang"
// // let exp1=/javascript/ig
// // let aa=str.search(exp1)
// // console.log(aa)

// //========================================================================

// // let a3=str.match(exp1)
// // console.log(a3)

// //=======================================================================

// // let a4=exp1.test(str)
// // console.log(a4)

// //=======================================================

// // let aa1=str.replace(exp1,"python")
// // console.log(aa1)

// //========================================================

// //^starts with
// // exp1=/^m/
// // let str1=["amit","anmol","archit","ankita","mayu"]
// // let res=str1.filter((el)=>exp1.test(el))
// // console.log(res)

// //====================================================

// //^starts with
// // exp1=/^[a][n]/
// // let str1=["amit","anmol","archit","ankita","mayu"]
// // let res=str1.filter((el)=>exp1.test(el))
// // console.log(res)

// //================================================

// //^starts with
// // exp1=/^[a]...[l]$/
// // let str1=["amit","anmol","archit","ankita","mayu"]
// // let res=str1.filter((el)=>exp1.test(el))
// // console.log(res)

// //=====================================================

// // let a=["7745045298","7721070870","9960638673098","asdfgasdf"]
// // a1=/[\d].{8}$/
// // let a2=a.filter((el)=>a1.test(el))
// // console.log(a2)

// //==================================================================

// // let a=["7745045298","7721070870","9960638673098","asdfgasdf"]
// // a1=/[\D].{8}$/
// // let a2=a.filter((el)=>a1.test(el))
// // console.log(a2)

// //==================================================================

// // let a=["7745045298","7721070870","9960638673098","asdfgasdf"]
// // a1=/[\w].{8}$/
// // let a2=a.filter((el)=>a1.test(el))
// // console.log(a2)


// //==================================================================

// // let a=["7745045298","7721070870","9960638673098","asdfgasdf","@#$%^&**&^%$#@"]
// // a1=/[\W].{8}$/
// // let a2=a.filter((el)=>a1.test(el))
// // console.log(a2)

// //=================================================================


// // let str="@#$ASDF!@#$12345"
// // exp=/\W/
// // let aa=str.split("").filter((el)=>exp.test(el)).join("")
// // console.log(aa)
// // console.log(aa.length)

// //================================================================

// //destructuring
// // let arr=[1,2,3,4,5]
// // arr[99]=100
// // console.log(arr)
// // console.log(arr.length)

// // let arr=new Array()

// // arr[0]=1
// // arr[1]=2
// // arr[2]=3
// // console.log(arr)

// // // a=arr[0]
// // // b=arr[1]
// // // c=arr[2]
// // // console.log(a)
// // // console.log(b)
// // // console.log(c)

// // let[a,b,c]=arr
// // console.log(a)
// // console.log(b)
// // console.log(c)


// // let student = ["mayuri", "dhanush", "mohini", "hukumbh"]
// // let [a, b, c] = student
// // console.log(a)
// // console.log(b)
// // console.log(c)

// // let human = {
// //     fullName: "mayuri", lastName: "katwe", age: 25, language: "marathi", religion: "hindu"
// // }

// // let fullName = human.fullName
// // let lastName = human.lastName
// // let age = human.age
// // console.log(fullName)
// // console.log(lastName)
// // console.log(age)

// // let{fullName:abc,lastName:xyz,age:klm}=human
// // console.log(abc)
// // console.log(xyz)
// // console.log(klm)

// // let school = {
// //     data: [
// //         student1 = {
// //             fullName: "mayu",
// //             age: 20
// //         },
// //         student2 = {
// //             fullName: "sayu",
// //             age: 27
// //         },
// //         student3 = {
// //             fullName: "tayu",
// //             age: 26
// //         },
// //         student4 = {
// //             fullName: "gayu",
// //             age: 21
// //         }

// //     ]
// // }

// // let [a, b, c] = school.data
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // let{fullName,age}=a
// // console.log(fullName)
// // console.log(age)

// //======================================================================

// //spread operator

// // let arr=[22,33,4,5,6,7,8,9,87,76,55,43]
// // function add(a,b,c){
// //     return a+b+c
// // }
// // let rr=add(...arr)
// // console.log(rr)

// //===================================================================

// // function add(...arr){
// // return arr.reduce((acc,el)=>acc+el)}
// // let aa=add(12,12,3,4,5,6,7,8,9,0,76,5,4,3,2,3,4)
// // console.log(aa)

// //==================================================================



// // let arr=["apple","mango",{names:"santra",price:200},"cocanate"]
// // let [a,b,{names,price},c]=arr
// // console.log(a)
// // console.log(b)
// // console.log(names)
// // console.log(price)
// // console.log(c)

// // let str={
// //     fullName:"mayu",
// //     skills:["java","js","python"]
// // }

// // let{fullName,skills:[a,b,c]}=str
// // console.log(fullName)
// // console.log(a)
// // console.log(b)


// // let str={
// //     fullName:"mayu",
// //     skills:["java","js","python",{job:"manual",spl:"cypress"}]
// // }
// // let{skills:[a,b,c,{job,spl}]}=str
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(job)
// // console.log(spl)

// // let humana1 = {
// //     fullName: "chinmay deshpande",
// //     skills: [{ age: 23, roll: 34 }, "javascript", "css"],
// //     family: {
// //         father: "shirish",
// //         mother: "kanchan"
// //     }
// // }

// // let {fullName,skills:[{age,roll},a,b],family:{father}}=humana1
// // console.log(fullName)
// // console.log(age)
// // console.log(roll)
// // console.log(a)
// // console.log(b)
// // console.log(father)

// //=============================================================================

// //spread operator

// // let arr=[1,3,4,5,676,78,98,-87,-98,56,43,98,76,76,65,567,-987,-345]
// // let arr1=arr.slice(-5)
// // function add(a,b,c,d){
// //     return (Math.abs(a)+Math.abs(b)+Math.abs(c)+Math.abs(d))
// // }

// // let pp=add(...arr1)
// // console.log(pp)



// //======================================================================

// // function add(...arr){
// //     return arr.reduce((acc,el)=>acc+el)
// // }


// // let p1=add(12,2,3,4,5,6,7,8,9,7,6,65,5,4,43,2345,1234)
// // console.log(p1)

// //======================================================================


// // function add(a, ...arr) {
// //     console.log(a)
// //     console.log(arr.slice(0, a))
// //     console.log(arr.slice(-a))
// // }
// // add(3, "mayu", "sayu", "tayu", "bhayu")

// //=======================================================================

// // let a=[1,2,3,4]
// // let b=[9,8,7,6]
// // // let c=[...a,...b]
// // // console.log(c)

// // let [ra,...rb]=[...a,...b]
// // console.log(ra)
// // console.log(rb)

// //=======================================================================

// // let human={
// //     fullName:"mayu",
// //     lastName:"katwe",
// //     age:23
// // }

// // //let{fullName,lastName,age}=human
// // let{fullName,...aaa}=human
// // console.log(fullName)
// // console.log(aaa)

// //==================================================================================================

// // if(true){
// //     console.log("hello")
// // }
// // if(false){
// //     console.log("ntg")
// // }
// // if(true){
// //     console.log("hey")
// // }

// //================================================================================================

// //1-5=10% ,6-10=20% ,>10=30%

// // let userInput=(Number(prompt("Please enter the number of tickets You buy")))
// // if(userInput>=1 && userInput<=5){
// //     document.write("10% discpunt")
// // }
// // if(userInput>5 && userInput<=10){
// //     document.write("20% discpunt")
// // }
// // if(userInput>10){
// //     document.write("30% discpunt")
// // }



// // let userInput=(Number(prompt("Please enter the number of tickets You buy")))
// // if(userInput>=1 && userInput<=5){
// //     document.write("10% discpunt")
// // }
// // else if(userInput>5 && userInput<=10){
// //     document.write("20% discpunt")
// // }
// // else if(userInput>10){
// //     document.write("30% discpunt")
// // }
// // else{
// //     document.write("Incorrect Input")
// // }

// //======================================================================================================


// // let randomNumber=(Math.floor(Math.random()*5)+1)
// // console.log(randomNumber)
// // let userInput=Number(prompt("Enter number between 1 to 5"))
// // if(userInput<=5){
// // if(userInput==randomNumber){
// //     document.write("You got correct random number")
// // }
// // else{
// //     document.write("You got incorrect random number")
// // }}
// // else{
// //     document.write("invalid input")
// // }
// //====================================================================================================



// // let randomNumber=(Math.floor(Math.random()*5)+1)
// // console.log(randomNumber)
// // let userInput=Number(prompt("Enter number between 1 to 5"))
// // if(userInput<=5){
// // if(userInput==randomNumber){
// //     document.write("You got correct random number")
// // }
// // else{
// //     console.log("You got incorrect random number")
// //     console.log("Lets try agian")
// //     randomNumber=Number(prompt("Enter number between 1 to 5"))
// //     if(userInput==randomNumber){
// //         document.write("You got correct random number ")
// // }
// // else{
// //     document.write("You got incorrect random number")
// //     }

// // }}
// // else{
// //     document.write("invalid input")
// // }

// //========================================================================================

// // correctInput = false
// // let randomNumber = Math.floor(Math.random() * 5) + 1
// // console.log(randomNumber)
// // let userInput = guessNumber()
// // if (userInput == randomNumber) {
// //     correctInput = true
// // }
// // else {
// //     correctInput = true
// //     console.log("lets try again")
// //     userInput = guessNumber()
// // }

// // function guessNumber() {
// //     return Number(prompt("Guess Random number betweeen 1-5"))
// // }

// // function checkGuess() {
// //     if (userInput == randomNumber) {
// //         correctInput = true
// //     }
// //     else {
// //         correctInput = false
// //     }
// // }

// // if(correctInput){
// //     console.log(`You guess correct random number ${randomNumber}`)
// // }
// // else{
// //     console.log(`You guess incorrect random number ${userInput}`)
// // }


// //===============================================================================================

// //for loop => duration is fixed
// //forward loop and revrese loop

// // for(let i=0;i<=10;i++){
// //     console.log(i)
// // }

// // let i=0
// // for(;i<=10;){
// // console.log(i)
// // i++
// // }

// //revrese loop
// // for(let i=10;i>=0;i--){
// //     console.log(i)
// // }

// // let i=10
// // for(;i>=0;){
// //     console.log(i)
// //     i--
// // }

// // let str = "amol"
// // let new1 = ""
// // let new2 = ""
// // for (let i = 0; i < str.length; i++) {
// //     new1 = str[i] + new1
// // }
// // console.log(new1)//loma

// // for (let i = 0; i < str.length; i++) {
// //     new2 = new2 + str[i]
// // }
// // console.log(new2)


// //let arr = [2, 3, 4, 5, 6, 7, 8, 9, 0, 4, 3, 5, 6, 7, 89, 89, 78, 9]
// // let m = new Set(arr)
// // console.log(m)

// // let a = []
// // let b = []

// // for (let i = 0; i < arr.length; i++) {
// //     if (a.indexOf(arr[i]) < 0) {
// //         a.push(arr[i])
// //     }
// //     else {
// //         b.push(arr[i])
// //     }
// // }
// // console.log(a)
// // console.log(b)



// // let mk=arr.filter(function(el,index,arr){
// // return arr.indexOf(el)==index
// // })
// // console.log(mk)


// // let str="my name is mayuri mahendra katwe"
// // let count=0
// // for(let i=0;i<str.length;i++){
// //     if(str[i]==" "){
// //         count++
// //     }
// // }

// // console.log(count)

// // let mm=str.split(" ").length-1
// // console.log(mm)

// ///////////////////////////////////////////////////////////////////////////////

// //break statement

// // for(let i=0;i<10;i++){
// //     console.log(i)
// //     if(i==3){
// //         break
// //     }

// // }

// // for(let i=0;i<10;i++){
// //     //console.log(i)
// //     if(i==3){
// //         continue
// //     }
// //     console.log(i)
// // }

// //To find min and max number in array

// // let arr=[23,-31,34,5,6,7,8,98,65,09,0,8,7,6,5]
// // let m=arr.sort((a,b)=>a-b)
// // console.log(m)
// // //////////////////////////////////
// // console.log(Math.max(...arr))
// // console.log(Math.min(...arr))


// //=======================================================================

// //while loop for infinite condition

// // initialization
// // while(condition check){
// //     statemenet
// //     increment/decremenet
// // }

// // let i=0
// // while(i<=10){
// //     console.log(i)
// //     i++
// // }



// //program to print even number
// // let num = 0
// // while (num <= 100) {
// //     if (num % 2 == 0) {
// //         console.log(num)
// //     }
// //     num++
// // }

// //progtam to write odd number
// // let num = 0
// // while (num <= 100) {
// //     if (num % 2 != 0) {
// //         console.log(num)
// //     }
// //     num++
// // }


// // //program to print firest 10 even number
// // let num = 0
// // let count = 0
// // while (num <= 100) {
// //     if (num % 2 == 0) {
// //         console.log(num)
// //         count++
// //         if (count == 10) {
// //             break
// //         }

// //     }
// //     num++
// // }


// //ternary operator=>used when only two condition need to check
// //let num=10
// // if(num>5){
// //     console.log("hello")
// // }
// // else{
// //     console.log("hey")
// // }

// //num>20?console.log("hello"):console.log("hey")

// //================================================================


// // can i call loop inside function

// // function add(){
// //     console.log("hey")
// // }
// // //add()

// // for(let i=0;i<=10;i++){
// //     add()
// // }


// //loop inside function
// // let arr=[12,23,4,5,6,7,8,9,1,2,3,4,5,6,7,8]
// // function add2(){
// //     for(let i=0;i<arr.length;i++){
// //     console.log( arr[i]+2)
// //     }
// // }

// // add2()

// //function inside loop
// // for (let i = 0; i <= 5; i++) {
// //     function add() {
// //         console.log("hello")
// //     }
// //     add()
// // }


// // let name1="mayuri"
// // let str=""
// // for(let i=0;i<name1.length;i++){
// // str=name1[i]+str
// // }
// // console.log(str)


// // let a="apple"
// // switch(a){
// //     case "apple":
// //         console.log("40rs")
// //        break;

// //      case "mango"  :
// //          console.log("30 rs")
// //       break;

// //          default:
// //              console.log("hello")

// // }

// //hoisting =>call the function above function declaration it possible only in fuction declaration

// // function add(a,b){
// //     console.log(a+b)
// // }
// // add(2,3)

// // let add=function(a,b){
// //     console.log(a+b)
// // }
// // add(2,3)

// // let add=(a,b)=>{
// // console.log(a+b)
// // }
// // add(2,3)

// //=======================================================================

// // call1(2,3)
// // function call1(a,b){
// //     console.log(a*b)
// // }

// // add(2,3)
// // let add=function(a,b){
// //     console.log(a*b)
// // }
// // add(2,3)
// // let add=(a,b)=>{
// //     console.log(a*b)
// // }

// //================================================================================


// // let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 2, 3, 3, 4, 4, 544, 55, 66, 77, 889, 23]
// // function add(num) {
// //     for (let i = 0; i < num.length; i++) {
// //         num[i] = num[i] + 2
// //     }
// //     return num

// // }

// // let m = add(num).reduce((acc, el) => acc + el)
// // console.log(m)
// ///////////////////////////////////////////////////////////////////////////////
// //function parameter as a array and return type also array

// // let arr1 = [2, 3, 4, 5, 6, 65, 56, 54, 76, 98, 76, 65, 54, 76, 87]
// // function add1(a) {
// //     for (let i = 0; i < a.length; i++) {
// //         a[i] = a[i] + 1
// //     }
// //     return a
// // }
// // let allarray=add1(arr1).reduce((acc,el)=>acc+el)
// // console.log(allarray)


// //---------------------------------------------------------
// //passing object as parameter of another object

// // let mayu={
// //     firName:"mayuri",
// //     age:20

// // }

// // function update(a){
// // a.firName="shalini"
// // }

// // update(mayu)
// // console.log(mayu.firName,mayu.age)

// // let radha = {
// //     firstName: "radhey",
// //     age: 30
// // }

// // function update(obj) {
// //     obj.firstName = "ganesh"
// //     return [obj.firstName, obj.age]
// // }

// // let new1 = update(radha)
// // let [a, b] = new1
// // console.log(a, b)

// //==============================================================


// //let fruits=["mango","banana","chiku","coconate"]
// // fruits.forEach((el)=>console.log(`Welcome ${el} !!!!`))

// // let arr=[]
// // for(let i=0;i<fruits.length;i++){
// //     arr.push(`Welcome ${fruits[i]} !!!`)
// // }

// // console.log(arr.toString())

// //fruits.map((el)=>console.log(`Welcome ${el} !!!`))

// //==============================================================================

// //let age = [34, 32, 54, 67, 89, 76, 65, 54, 43]
// // let blank = []
// // function calage(a) {
// //     for (let i = 0; i < a.length; i++) {
// //         blank.push(2021 - a[i])
// //     }
// //     return a
// // }

// // let a2=calage(age)
// // console.log(a2)

// //===================================================

// // let arr2 = []
// // function add2(a) {
// //     for (let i = 0; i < a.length; i++) {
// //         arr2.push(a[i] + 2)
// //     }
// //     return a
// // }
// // let m1 = add2(age)
// // console.log(m1)
// // console.log(arr2)

// //=============================================================

// // let arr = [23, 45, 67, 87, 76, 65, 54, 34, 32, 12]
// // //need to do 2021-22, add2, 10%
// // let bnk = []
// // function calculator(arr, fn) {
// //     for (let i = 0; i < arr.length; i++) {
// //         bnk.push(fn(arr[i]))
// //     }
// //     return bnk

// // }
// // let birthYear = ((el) => 2021 - el)
// // let add2 = ((el) => el + 2)
// // let tenper = ((el) => el * 0.10)

// // let aa1=calculator(arr,birthYear)
// // console.log(aa1)
// // let aa2=calculator(arr,add2)
// // console.log(aa2)
// // let aa3=calculator(arr,tenper)
// // console.log(aa3)


// //==============================================================================================

// //for loop when duration is fix

// // for(let i=0;i<=10;i++){
// //     console.log(i) //0-10 number print
// // }

// // for(let i=10;i>=0;i--){
// //     console.log(i) //print 10-0
// // }

// //let str="Mayuri"
// // for(let i=0;i<str.length;i++){
// //     console.log(str[i])
// // }

// // for(let i=str.length-1;i>=0;i--){
// //     console.log(str[i])
// // }

// // let name1="Mayuri Katwe"
// // let str=""
// // for(let i=0;i<name1.length;i++){
// //     str=str+name1[i]
// // }
// // console.log(str)


// // for(let i=0;i<name1.length;i++){
// //     str=name1[i]+str
// // }
// // console.log(str)

// //duplicate number
// // let arr1 = [12, 3, 4, 56, 78, 98, 87, 76, 65, 65, 54, 43, 43, 32, 21, 12, 3, 4, 56]
// // let a = []
// // let b = []
// // for(let i=0;i<arr.length;i++){
// //     if(!a.includes(arr[i])){
// //         a.push(arr[i])
// //     }
// //     else{
// //         b.push(arr[i])
// //     }
// // }
// // console.log(a)
// // console.log(b)


// // for(let i=0;i<arr.length;i++){
// //     if(a.indexOf(arr[i])<0){
// //         a.push(arr[i])
// //     }
// //     else{
// //         b.push(arr[i])
// //     }
// // }
// // console.log(a)
// // console.log(b)

// // let new1=new Set(arr)
// // console.log(new1)

// // arr1.filter((el, index, arr) => arr.indexOf(el) == index ? a.push(el) : b.push(el))
// // console.log(a)
// // console.log(b)

// //====================================================================================

// //while loop =>duration is not known
// // let i=0
// // while(i<=10){
// //     console.log(i)
// //     i++
// // }

// // let i=10
// // while(i>=0){
// //     console.log(i)
// //     i--
// // }


// // let num = 0
// // while (num <= 50) {
// //     if (num % 2 == 0) {
// //         console.log(num)
// //     }
// //     num++
// // }

// // let num = 100
// // while (num >= 0) {
// //     if (num % 2 != 0) {
// //         console.log(num)
// //     }
// //     num--
// // }


// //break and continue =>break statemenet=> came outiside of loop after break and in continue it just skip condiion given in continue

// // let num = 100
// // for (let i = 0; i <= 10; i++) {
// //     console.log(i)
// //     if (i == 4) {
// //         break
// //     }
// // }

// // for (let i = 0; i <= 10; i++) {
// //     if (i == 4) {
// //         continue
// //     }
// //     console.log(i)
// // }

// // let fruit="mango"

// // switch(fruit){
// //     case "mangos":
// //         console.log("40 rs kg")
// //         break

// //         case "apple":
// //         console.log("50 rs kg")
// //         break

// //         case "mango":
// //         console.log("100 rs kg")
// //         break

// //         default:
// //             console.log("unavailble")

// // }


// //ternary operator => if there is only two condition need to check

// // let age=20
// // let status=age>18?"You can drive":"You cant drive"
// // console.log(status)

// //==========================================================================

// //hosisting =>function declarion is move upward than inisialization called as hoisting it is not possible in function expression and arrow function

// //function declaration
// // function add(a,b){
// //     console.log(a+b)
// // }
// // add(2,3)

// //function expression
// // let add=function(a,b){
// //     console.log(a+b)
// // }
// // add(2,3)

// //arroe function
// // let add=(a,b)=>{
// // console.log(a+b)
// // }
// // add(2,3)


// // add(2,3)
// // function add(a,b){
// //     console.log(a+b)
// // }

// //============================================================

// //can i call loop inside function

// // let arr = [23, 34, 56, 78, 98, 87, 76, 65, 54, 43]
// // function add(a) {
// //     for (let i = 0; i < a.length; i++) {
// //         a[i] = a[i] + 2
// //     }
// //     return a
// // }
// // let add2 = add(arr)
// // console.log(add2)

// //can i call functiom inside loop
// // for(let i=0;i<=2;i++){
// //     function add(){
// //         console.log("hello")
// //     }
// //     add()
// // }

// let arr = [12, 3, 4, 5, 6, 7, 8, 9, 0, 7, 6, 6, 5]
// let blank = []
// // let a=[]
// // function birthyear(arr){
// // for(let i=0;i<arr.length;i++){
// //     a.push(2021-arr[i])
// // }
// // return a
// // }
// // let big=birthyear(arr)
// // console.log(big)

// // birthyear = ((el) => 2021 - el)
// // function calculate(arr, fn) {
// //     for (let i = 0; i < arr.length; i++) {
// //         blank.push(fn(arr[i]))
// //     }
// //     return blank
// // }

// // let by = calculate(arr, birthyear)
// // console.log(by)

// // const car = {}
// // car['Model'] = "swift"
// // console.log(car)
// // car = [1, 2, 3, 4, 5]
// // console.log(car)

// //===================================================================


// // class car {
// //     constructor(model, prize) {
// //         this.model = model
// //         this.prize = prize
// //     }

// //     display() {
// //         console.log(this.model, this.prize)
// //     }
// // }

// // let audi=new car("Audi","5l")
// // console.log(audi)
// // console.log(audi.model)
// // console.log(audi.prize)
// // audi.display()

// //=======================================================================

// // let nameddd=[1,2,3,4,5]
// // let car={
// //     model:"audi",
// //     prize: 4000,
// //     Boolean:12,
// //     12: "mayuri"
// // }
// // console.log(car)

// //==========================================================================

// // let mayuri={
// //     fullName:"mayu",
// //     lastname:"katwe",
// //     [1,2,3]:"one"
// // }
// // console.log(mayuri)

// let mayu=new Map()
// mayu.set("fullname","mayuri")
// mayu.set([1,2,3,4],"gread")
// mayu.set(true,"nature")
// mayu.set(2345,"sallry")
// mayu.set(false)
// console.log(mayu)
// console.log(mayu.get("fullname"))
// console.log(mayu.get(false))
// console.log(mayu.size)
// //mayu.clear()
// console.log(mayu)
// //mayu.clear()
// console.log(mayu)


// // for(let keys of mayu.keys()){
// //     console.log(keys)
// // }

// // for(let value of mayu.values()){
// //     console.log(value)
// // }

// console.log(mayu.entries())

// for(let [keys,value] of mayu.entries()){
//     console.log(keys,value)
// }


let x = 10
let y = x
console.log(y)
x = 100
console.log(y)


let human = {
    name1: "mayu",
    surname: "katwe"
}
let person = human
console.log(person)

human.name1 = "sanu"
console.log(person)



