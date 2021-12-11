

//There are two way to represent regular expression 

//1st way
//let m = new RegExp('Mayuri')

// let str = "I am mayuri katwe mayuri"
// let a = /mayuri/g
// let ab = str.match(a)
// console.log(ab)
// console.log("=========")

// let bb=str.matchAll(a)
// console.log(bb)

// let cc = str.search(a)
// console.log(cc)

// //===================================

// console.log(str.replace(a,"ganesha"))

//====================================

//for stat with ^ for ends with $
// let str=['amar','mayuri','chinu','chitu']
// let mm=/^m....i$/
// let aa=str.filter((el)=>mm.test(el))
// console.log(aa)

// let str=['mayuri-pune','gaurang-nagpur','nitu-hydrabad','ashwini-nashik']
// let exp=/pune/
// console.log(str.filter((el)=>exp.test(el)))



// let num=[7745045298,772104529,7276145298,9922899468,98810708700000999]
// let aa=/^[7][7].{8}$/
// let you=num.filter((el)=>aa.test(el))
// console.log(you)

// let num=[7745045298,772104529,7276145298,9922899468,98810708700000999]
// let aa=/^[^7][^7].{8}$/
// let you=num.filter((el)=>aa.test(el))
// console.log(you)

//any num within 0-9 we used [\d]
// let num=[7745045298,772104529,7276145298,9922899468,98810708700000999]
// let a=/^[\d][\d].{8}$/
// let mm1=num.filter((el)=>a.test(el))
// console.log(mm1)

//anything without 0-9 numaber we used [\d]
// let num=[7745045298,772104529,7276145298,9922899468,98810708700000999,"asdfgasdfg"]
// let a=/^[\D][\D].{8}$/
// let rk=num.filter((el)=>a.test(el))
// console.log(rk)

//\w anything with include a-z A-Z 0-9
// let student=['Mayuti',1234567,"asdfghasff","$%^&*()",987065749]
// let abc=/\w/
// let abc1=student.filter((el)=>abc.test(el))
// console.log(abc1)

//\w anything with include a-z A-Z 0-9
// let student=['Mayuti',1234567,"asdfghasff","$%^&*()",987065749]
// let abc=/\W/
// let abc1=student.filter((el)=>abc.test(el))
// console.log(abc1)

//****************************************************************888 */

// let str = "abcdefg1234567$%^&*"
// let a = []
// let b = []
// let c = []
// // let aa=/\d/
// // let bb=/\w/
// let cc=/\W/
// str.split("").map((el) => {
//     if (el >= 'a'&& el <='z') {
//         a.push(el)
//     }
//     else if (el >= 0 && el <= 9) {
//         b.push(el)
//     }
//     else {
//         c.push(el)
//     }
// })
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)

// console.log(str.split("").filter((el)=>cc.test(el)))



















