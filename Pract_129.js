
// console.log("=================Array Method===================")

// //1. Push method => add the element at last and return the length
// let a=[1,2,3,4,5,6,7]
// let aa=a.push(10)
// console.log(aa)

// //2. pop method=> remove the element from last and return the element which is remove
// let bb=a.pop()
// console.log(bb)

// //3. unshift => add the element at start and return the length of array
// let c=a.unshift(11)
// console.log(c)

// //4. shift method => remove the starting element and return the element which is remove
// let d=a.shift()
// console.log(d)

// //5. Revrese method => reverese the array and return the array only
// let e=a.reverse()
// console.log(e)

// //6. sort method =>sort the elemnt of array and return the array
// let arr=[12,65,99,77,5434,56,7685,9453,665,44,66,33,546]
// let f=arr.sort()
// console.log(f)

// //7. flat method => resorve the subarray into single array
// let arr1=[[9,9,8],[6,5,4],[8,6,5]]
// let g=arr1.flat()
// console.log(g)

// //8. indexof => give the index of given element and if not found give -1
// let aa1=[2,7,8,9,5]
// let h1=aa1.indexOf(9)
// console.log(h1)

// //9. include => search the element in array if found return tru else false
// let fruits=["apple","mango","grapes","orange"]
// let l=fruits.includes("apple")
// console.log(l)

// //10. map method => perform the opertion with each element and return the array 
// let ar1=[34,56,78,97,85,86,65,64,34,56,67]
// let a2=ar1.map(function(el){
//     return el*el
// })
// console.log(a2)

// //11. reduce method => perform the action and return single number
// let sum=ar1.reduce(function(acc,el){
//     return acc+el
// },0)
// console.log(sum)

// //12. Filter method => perform the action with each ment and return the array
// let kk=ar1.filter(function(el){
//     return el>60
// })
// console.log(kk)

// //13. foreach method => perform the action with each element return the single sigle element
// let arr3=["mayu","tayu","ranu","bhanu","sanu"]
// arr3.forEach(function(el){
//     console.log(`Welcome ${el} !`)
// })

// //14. find method => compare the condition with first element in array which match with condition and return thos element
// let num1=[2,58,9,6,5,4,6,7,00]
// let y1=num1.find(function(el){
//     return el>5
// })
// console.log(y1)

// let obj1=[
//     {firstname:"mayu",age:24},
//     {firstname:"ranu",age:28},
//     {firstname:"ram",age:69}
// ]
// let tt1=obj1.find(function(el){
//    return el.firstname="ranu"
// })
// console.log(tt1)

// //15. findindex method => match the index of given element in array and return the index 
// let tt2=obj1.findIndex(function(el){
//     return el.age==28
// })
// console.log(tt2)

// //16. some method
// let num9=[2,4,6,8,9,6,5,4,3,2]
// let mm=num9.some(function(el){
//     return el>3
// })
// console.log(mm)

// //17 Every method
// let mm1=num9.every(function(el){
//     return el>3
// })
// console.log(mm1)

// //18 concat method
// let aaa1=[2,4,5]
// let b=[3,8,9]
// console.log(aaa1.concat(b))

// //19 slice
// let as=[2,4,6,2,12,34,56,78,97,5,33,44,55,66,77]
// console.log(as.slice(3))

// //20 Splice
// console.log(as.splice(8,2,9999,7777))

// //21.join
// console.log(as.join("="))

console.log("====================String Method======================")

// // let str = "mayuri"
// // console.log(str.length)

// // //1. toUpperCase()
// // console.log(str.toUpperCase())

// // //2. toLowerCase()
// // console.log(str.toLowerCase())

// // //3. Slice()
// // let aa = str.slice(2)
// // console.log(aa)

// // let bb = str[0].toUpperCase() + str.slice(1)
// // console.log(bb)

// // // let str1= "mayurikatwe"
// // // for(let i=0;i<str1.length;i++){
// // // console.log(str1[i])
// // // }

// let str1 = "mayurikatwe"
// // // let count=0
// // // for(let i=0;i<str1.length;i++){
// // //     if(str1[i]=="a"){
// // //         count=count+1
// // //     }
// // // }
// // // console.log(count)

// let store = " "
// for (let i = 0; i < str1.length; i++) {
//     if ([i] == 0) {
//         store = store + str1[i].toUpperCase()
//     }
//     else {
//         store = store + str1[i]
//     }
// }
// console.log(store)

// //indexof
// let aaa = "MayuriaKatwe"
// // let mm=aaa.indexOf("a",(aaa.indexOf("a",0)+1))
// // console.log(mm)

// let xy = aaa.indexOf("a", (aaa.indexOf("a", (aaa.indexOf("a", 0) + 1)) + 1))
// console.log(xy)

// //split method
// let a1 = "mayuri"
// let kk = a1.split("")
// console.log(kk)

// //include method
// let arr12 = "apple, mango, orange, grapes"
// let io = arr12.includes("apple")
// console.log(io)

// //trim method
// let mmk = "  mayurikatwe  "
// let mm1 = mmk.trim()
// console.log(mm1)

// let mm2 = mmk.trimLeft()
// console.log(mm2)

// let mm3 = mmk.trimRight()
// console.log(mm3)

// let mm12 = " mayuri m katwe "
// let mu = mm12.trim().split(" ").join("")
// console.log(mu)

// //replace method

// let str9 = "i like js and try to learn js"
// let oo = str9.replace("js", "python")
// console.log(oo)

// let cc = str9.split(" ")
// console.log(cc)
// for (let i = 0; i < cc.length; i++) {
//     if (cc[i] === "js") {
//         cc[i] = "python"
//     }
// }
// console.log(cc.join(" "))


// let name1 = "mayuri"
// let nn1 = name1.repeat(5)
// console.log(nn1)

// let code = "5a4b3c1d"
// code = code.split("")
// let yy = " "
// for (let i = 0; i < code.length; i++) {
//     if (Number(code[i])) {
//         yy = yy + code[i + 1].repeat(Number(code[i]))
//     }
// }
// console.log(yy)
// let num8="aaaabbbccd"
// let lmk = num8.split("")
// let ref = ""
// let count = 0
// for (let i = 0; i < lmk.length; i++) {
//     count=count+1
//     if (lmk[i] != lmk[i + 1]) {
//         ref = ref+ count + lmk[i]
//         count = 0
//     }
// }
// console.log(ref)


// //starts with

// let string="start"
// console.log(string.startsWith("s"))

// //endswith
// console.log(string.endsWith("t"))

//toUppercase toLowercase split slice repeat indexof includes startewth endwith trim


// let str = "mayuri"
// //1. toUpeercase
// console.log(str.toUpperCase())

// //2. toLowecase
// let str1 = "KATWE"
// console.log(str1.toLowerCase())

// //3. Slice
// let aa = str1.slice(1, 4)
// console.log(aa)

// //4. Split
// let str2 = "mayuri katwe"
// let bb = str2.split("")
// console.log(bb)

// //first letter capital and remaining small case
// let str11 = "mayuri"
// let cc = str11[0].toUpperCase() + str11.slice(1)
// console.log(cc)

// let res = ""
// for (let i = 0; i < str11.length; i++) {
//     if ([i] == 0) {
//         res = res + str11[i].toUpperCase()
//     }
//     else {
//         res = res + str11[i]
//     }
// }
// console.log(res)

// //5. indexof
// let str4 = "jasminaamrut"
// let dd = str4.indexOf("a", 0)
// console.log(dd)
// //second occarance
// let eee = str4.indexOf("a", (str4.indexOf("a", 0)) + 1)
// console.log(eee)
// //third occarance
// let ff = str4.indexOf("a", (str4.indexOf("a", (str4.indexOf("a", 0)) + 1)) + 1)
// console.log(ff)

// let b1 = str4.split("")
// b2 = []
// for (let i = 0; i < b1.length; i++) {
//     if (b1[i] == "a") {
//         b2.push(b1[i])
//     }
// }
// console.log(b2)

// //6. include
// let str6 = "mango,apple,grapes,orange,dragenfruit"
// console.log(str6.includes("mango"))

// //7. trim
// let str8 = " Mayuri "
// console.log(str8.length)
// let hh = str8.trim()
// console.log(hh)
// console.log(hh.length)
// let kk = str8.trimRight()
// console.log(kk.length)
// console.log(str8.trimLeft().length)

// let bit="Mayuri Katwe"
// bit=bit.split(" ").join("")
// console.log(bit)

// //8. repeat
// let st9 = "amol"
// let ll = st9.repeat(6)
// console.log(ll)

// let prob = "5a4b3c2d1e"  //aaaaaabbbbcccdde
// prob = prob.split("")
// ref1 = ""
// for (let i = 0; i < prob.length; i++) {
//     if (Number(prob[i])) {
//         ref1 = ref1 + prob[i + 1].repeat(Number(prob[i]))
//     }
// }
// console.log(ref1)

// let prob2 = "aaaaabbbbcccdde" //5a4b3c2d1e
// prob2 = prob2.split("")
// let ref3 = ""
// let count = 0
// for (let i = 0; i < prob2.length; i++) {
//     count = count + 1
//     if (prob2[i] != prob2[i + 1]) {
//         ref3 = ref3 + count + prob2[i]
//         count = 0
//     }
// }
// console.log(ref3)
// console.log(typeof(ref3))

// //9. Startwith
// let str0="mayuri"
// console.log(str0.startsWith("m"))

// //10. Endswith
// console.log(str0.endsWith("i"))

//Object

let a = {
    firstname: "mayuri",
    lastname: "katwe",
    age: 23
}

//retrive the property
console.log(a.firstname)
console.log(a['firstname'])

//adding the new property
a.color = "white"
a.language = "marathi"
console.log(a)

//updateing the value
a.colour = "black"
a.age = 30
console.log(a)

//delete the value
delete a.age
console.log(a)

let pp = a.hasOwnProperty("firstname")
console.log(pp)

let str = "aaasssdddffggg"//{a=5,s=3,d=4}
let z = {}
for (let i = 0; i < str.length; i++) {
    if (z.hasOwnProperty(str[i])) {
        z[str[i]] = z[str[i]] + 1
    }
    else {
        z[str[i]] = 1
    }
}
console.log(z)

let amol = {
    firstname: "amolchandra",
    lastname: "ramanuj",
    display: function () {
        console.log(`My firstname is ${this.firstname}`)
    }
}
amol.display()

let chinmay={
    firstname:"chimaychandra",
    lastname:"shevale",
    display:function(){
        console.log(`may lastname is ${this.lastname}`)
    }
}
chinmay.display()

class student{
    constructor(age,name1)
    {
        this.name1=name1
        this.age=age
    }
        display()
        {
            console.log(`My age is ${this.age} and may firstname is ${this.name1}`)
        }
    
    }


let amol1=new student(25,"amolrao")
console.log(amol1)
amol1.display()

let mayuri=new student(30,"mayu")
console.log(mayuri)
mayuri.display()






class bike{
    constructor(avg,model){
    this.avg=avg
    this.model=model
    }
   run(){
       console.log(`May bike model is ${this.model} and avg is ${this.avg}`)
   }
}

let suzuki=new bike(25,"FZ")
console.log(suzuki)
suzuki.run()









