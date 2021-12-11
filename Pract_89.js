// //Array Methods

// //1 Push method=> add element at last return the length of array
// let names = ["mayu", "sonu", "dingu", "pingu"]
// let aa = names.push("mangu")
// console.log(aa)
// //console.log(names)

// //2 pop method=> remove last element from array return element which is remove
// let bb = names.pop()
// console.log(bb)
// //console.log(names)

// //3. unshift=>Add element at start and return the length of array
// let cc = names.unshift("chiku")
// console.log(cc)
// //console.log(names)

// //4.Shift=> remove the element from start and return the element which is remove
// let dd = names.shift()
// console.log(dd)

// //5. indexOf method => Give the index of element if present in array and give -1 if not found
// let ll = ["Apple", "Banana", "grapes", "Orange"]
// let ee = ll.indexOf("Banana")
// console.log(ee)

// //6. Reverse method=> revrese the array and return array only
// let ff = ll.reverse()
// console.log(ff)

// //7. Sort method =>Sort th element in array and return the array
// let asb = [2, 99, 75, 64, 83, 45, 56, 99, 33, 2, 4, 5]
// let gg = asb.sort()
// console.log(gg)

// //8. Flat method => resolve all sub array into single array and return array only
// let asd = [[9, 8, 7], [5, 6, 4], [3, 5, 8]]
// let hh = asd.flat()
// console.log(hh)

// //9. Include method => search the element found in array if found return true else false
// let sdf = ["apple", "santra", "orange", "grapes"]
// let zz = sdf.includes("apple")
// console.log(zz)

// let a1 = "apple".toLowerCase()
// if (sdf[0].includes(a1)) {
//     console.log("Apple available")
// }
// else {
//     console.log("Apple not available")
// }

// //10: Join method => Join the array element with given element and return the string
// let sdf1 = ["apple", "santra", "orange", "grapes"]
// let xx=sdf1.join("=")
// console.log(xx)

// //11: Map method => perform the operation with each element and return array
// let birthyear=[1990,1998,1865,1745,2000]
// let cc1=birthyear.map(function(el,index,arr){
//     return 2021-el
// })
// console.log(cc1)

// //12: Filter method =>
// let num=[98,87,67,89,56,45,23,66]
// let op=num.filter(function(el,index,arr){
//     return el >56
// })
// console.log(op)

// //13: reduce method
// let num2=[12,45,56,67,89,54,657,55]
// let ff2=num2.reduce(function(acc,el,index,arr){
//     return acc+el
// })
// console.log(ff2)

// //14. ForEach method
// let stu1=["chinmay","mayuri","ram","sham"]
// stu1.forEach(function(el,index,arr){
//     console.log(`Welcome ${el} !`)
// })

// let no=[12,24,36,56,89,78,98,76,77]
// copy=[]
// no.forEach(function(el){
// copy.push(el*el)
// })
// console.log(copy)

// //15. find method
// let no1=[12,24,36,56,89,78,98,76,77]
// let kkm=no1.find(function(el){
//     return el<20
// })
// console.log(kkm)

// let nu2=[
// {firstname:"mayu",age:25},
// {firstname:"sonu",age:20},
// {firstname:"monu",age:10}
// ]
// let yy1=nu2.find(function(el){
//     return el.firstname=="mayu"
// })
// console.log(yy1)

// //16. findindex method
// let p1=nu2.findIndex(function(el){
//     return el.firstname=="mayu"
// })
// console.log(p1)

// let no8=[12,24,36,56,89,78,98,76,77]
// let pp=no8.findIndex(function(el){
//     return el==36
// })
// console.log(pp)

// //17.Some method
// let num8=[12,23,34,45,56,67,78,89,76,65,54,33,34,56,77,88,99,66]
// let tt=num8.some(function(el){
//     return el>44
// })
// console.log(tt)

// //18.every method
// let yu=num8.every(function(el){
//     return el>44
// })
// console.log(yu)

// //19.concat
// let a=[1,3,5,6,7,8,9]
// let b=[3,5,6,7,8,9]
// console.log(b.concat(a))

// //20 slice
// let yy3=[2,4,5,6,7,4,3,4,5,7,8,9,0,7,6,99,60,61,78,46]
// let uu=yy3.slice(-5)
// console.log(uu)

// //21.splice
// let ppp=yy3.splice(2,3,777,999,888)
// console.log(ppp)
// console.log(yy3)

// //push pop unshift shift reverse indexof include flat sort join map filter reduce foreach find some every slice splice concat findndex


//while loop

// let i=0
// while(i<50){
//     console.log(i)
//     i++
// }

// let i=50
// while(i>=0){
//     console.log(i)
//     i--
// }

// 50 even number
// let i=0
// let count=0
// while(i<=50){
//     count++
//     if(i%2==0){
//         console.log(i)
//     }
//     i++
// }

//50 odd number
let i=0
let count=0
while(i<50){
    count++
    if(i%2!=0){
        console.log(i)
    }
    i++
}






