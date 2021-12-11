// let a=10
// console.log(typeof a)

// a="mayuri"
// console.log(typeof a)

// let p=true
// console.log(typeof p)

// let m
// console.log(m)

// let m1=null
// console.log(m1)

// let p1=[1,9,3,4,5]
// console.log(typeof p1)

// let k1={
//     a:1
// }
// console.log(typeof k1)

// let l1=new Map()
// console.log(typeof l1)

// let a1=Symbol('$')
// console.log(typeof a1)

//**************************************************************//

// let student="Mayuri"
// console.log(typeof student)

//1. toUpperCase()
// let a=student.toUpperCase()
// console.log(a)

//2. toLowerCase()
// let a="MAYURI"
// let aa=a.toLowerCase()
// console.log(aa)

//3. slice()
// let a="Mayuri Katwe"
// let aa1=a.slice(0,4)
// console.log(aa1)
// let b1=a.slice(-4)
// console.log(b1)

// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.slice(-5))

//4.indexOf
// let str="Mayuriamaklhga"
// let a1=str.indexOf("a")
// console.log(a1)

// //to know index at secobd occarance
// let aa=str.indexOf('a',str.indexOf('a')+1)
// console.log(aa)

// //to know 3 occarance
// let aaa=str.indexOf('a',str.indexOf('a',str.indexOf('a')+1)+1)
// console.log(aaa)

//5. includes()
// let str="Mayuri"
// let aa=str.includes("a")
// console.log(aa)

//6. trim()
// let name1=" Mayuri Katwe "
// console.log(name1.length)
// // let a1=name1.trim()
// // console.log(a1)
// // console.log(a1.length)

// let a1=name1.trimLeft()
// console.log(a1)
// console.log(a1.length)

// let a2=name1.trimRight()
// console.log(a2)
// console.log(a2.length)

// console.log(name1.trim().split(" ").join(""))

//7. replace()
// let str="Mayuri Katwe"
// let aa=str.replace('Mayuri','Gauri')
// console.log(aa)

//8. repeate
// let str="Mayuri"
// let aa=str.repeat(2)
// console.log(aa)

// let p = "4a3b2c1d" //aaaabbbccd
// let q = ""
// for (let i = 0; i < p.length; i++) {
//     if (Number(p[i])) {
//         q = q + p[i + 1].repeat(Number(p[i]))
//     }
// }
// console.log(q)

// let p = "aaaabbbccd" //"4a3b2c1d"
// let count = 0
// let q = ""
// for (let i = 0; i < p.length; i++) {
//     count++
//     if (p[i] != p[i + 1]) {
//         q = q + count + p[i]
//         count = 0
//     }

// }
// console.log(q)

//9.charAt
// let str="Mayuri"
// let aa=str.charAt(2)
// console.log(aa)

//10. charCodeAt()
// let str="mayuri"
// let aa=str.charCodeAt(2)
// console.log(aa)

//11. startswith()
// let str="mayuri"
// console.log(str.startsWith('m'))

// //12. endswith
// console.log(str.endsWith('i'))
// console.log(str.valueOf('m'))

// let kk="mayuri katwe"
// let kk1=kk.valueOf('k')
// console.log(kk1)
// let mm=str.toString('k')
// console.log(mm)






