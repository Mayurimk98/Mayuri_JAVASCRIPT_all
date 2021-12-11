
/* //Function without parameter without return type
function add(){
    console.log(12+13)
}
add()
add()
add()

function sub(){
    console.log(78+23)
}
sub()
sub()
sub()

console.log("=======================================")

//Function with parameter without return type
function add1( x,y){
console.log(x+y)
}
add1(12,13)
add1(45,34)
add1(98,56)

function mul(s,b){
    console.log(s*b)
}
mul(34,98)
mul(89,56)

console.log("======================================")

//Function with para with return type
function add3(a,b){
    return (a*b)
}
let zz= add3(12,13)
console.log(zz+12)
console.log(zz*12)

function sub1(d,f){
    return(d-f)
}
let kk=sub1(56,12)
console.log(kk+89)
console.log(kk*12) */


/* //Function practice
console.log("===================================================================")
//function without para without return type
function add() {
    console.log(12 + 13)
}
add()
add()
add()

//function with parameter without return type
function sub(x, y) {
    console.log(x - y)
}
sub(21, 10)
sub(30, 12)
sub(20, 1)

//function with para with return type
function mul(a, b) {
    return (a * b)
}
let aa = mul(20, 20)
console.log(aa)
console.log(aa + 23)

console.log("===============================================")
//Type of functon
//Function declartion
function add1(d, g) {
    return (d + g)
}
let bb = add1(10, 20)
console.log(bb + 30)

//Function Expression
let sub1 = function (a, c) {
    return (a - c)
}
let mm = sub1(30, 20)
console.log(mm * 12)

//Arrow function
let mul1 = (s, b) => (s + b)

let ss = mul1(12, 12)
console.log(ss + 12)

console.log("-----practice function type------------------")

//Function declaration
function sub3(x1, y1) {
    return (x1 - y1)
}
let bb1 = sub3(12, 12)
console.log(bb1 + 1)

//function expression

let sub4 = function (a1, b1) {
    return (a1 + b1)
}
let cc1 = sub4(12, 11)
console.log(cc1 + 10)

//arrow funtion
let sub5 = (q, w) => {
    return (q + w)
}
let qw = sub5(10, 10)
console.log(qw + 11)

let sub12 = (a11, b11) => (a11 + b11)
console.log(sub12(20, 10))

console.log("----------Stringoverview---------------")

let v = 10
console.log(typeof v)

let n = true
console.log(typeof n)

let d1 = "chinmay"
console.log(typeof d1)

let r = "amol"
let qq = r.length
console.log(qq)
console.log(typeof qq)

let g = "Apple"
let h = g.toUpperCase()
console.log(h)
let l = g.toLowerCase()
console.log(l)
console.log(l.length)

let kk = g[0].toLowerCase() + g.slice(1, g.length).toUpperCase()
console.log(kk)

console.log("===========stric overview practice===================")

let q1 = 10
console.log(typeof q1)
let w1 = false
console.log(typeof w1)
let e1 = "mayu"
console.log(typeof e1)

let r1 = "mahendra"
let t1 = r1.toUpperCase()
console.log(t1)
let y1 = t1.toLowerCase()
console.log(y1)
console.log(y1.length)

let u1 = r1.toUpperCase().toLowerCase().length
console.log(u1)

console.log("==================concatination=======================")

let js = "I am new to js ,give me js book"
console.log(js)

let firstname = "chinmay"
let lastname = "deshpande"

//my firstname is chinmay and my surname is deshpande
console.log("my fisrstname is " + firstname + " and my surname is " + lastname)

//String interpolation
console.log(`my firstname is ${firstname} and my lastname is ${lastname}`)

let c = 10
let d = "chin"
let e = 20
console.log(c + d)
console.log(c + d + e)
console.log(c + e + d)
console.log(d + c + e)

console.log("======concatination practice==================")

let area = "garden"
let flower = "lotus"
console.log(`In our ${area} we have ${flower} flower `)

let l1 = 20
let m1 = 30
let p1 = "mayu"
console.log(l1 + p1 + m1)
console.log(l1 + m1 + p1)
console.log(p1 + m1 + l1)

console.log("==================for loop==============")
let gh = "amolrao sarode"
/* let ff=""
for (let i=0;i<gh.length;i++){
    //console.log(i)
    ff=ff+gh[i]
    //console.log(ff)
    //console.log(gh[i])
}
console.log(ff) */
/* let count = 0
for (let i = 0; i < gh.length; i++) {
    if (gh[i] == "o") {
        count = count + 1
    }
}
console.log(count)

let zz = "Mayuri Katwe"
let ref = 0
for (let i = 0; i < zz.length; i++) {
    if (zz[i] == "a" || zz[i] == "e" || zz[i] == "i" || zz[i] == "o" || zz[i] == "u") {
        ref = ref + 1
    }
}
console.log(ref)

console.log("=============for loop practice=================")
//Forward loop


for (let i=0;i<zz1.length;i++){
    console.log (zz1[i])
}
let zz1="Ganpati bappa morya"
//Revrese loop
for(let i=zz1.length-1;i>0;i--){
    console.log(zz1[i])
}

//forward loop 1 sentence
let xx1=""
for (let i=0;i<zz1.length;i++){
    xx1=xx1+zz1[i]
}
console.log(xx1)

//revrese loop 1 sentance
let xx2=""
for (let i=0;i<zz1.length;i++){
    xx2=zz1[i]+xx2
}
console.log(xx2)
 */
//count number of a
/* let zz2="Ganpati bappa morya"
let cc=0
for (let i=0;i<zz2.length;i++){
if(zz2[i]=="a"){
    cc=cc+1
}
}
console.log(cc) */
//count number of vowels
/* let zz2="Ganpati bappa morya"
let cc1=0
for (let i=0;i<zz2.length;i++){
if(zz2[i]=="a"||zz2[i]=="e"||zz2[i]=="i"||zz2[i]=="o"||zz2[i]=="u"){
    cc1=cc1+1
}
}
console.log(cc1)

console.log("===============object=================")

let person={
    firstname:"chinmay",
    lastname:"deshpande",
    weight:90,
    age:40
}
console.log(person.firstname)
console.log(person['firstname'])

console.log(person.age)
console.log(person['age'])

person.colour="white"
console.log(person)

person.firstname="amol"
console.log(person)

delete person.age
console.log(person)

console.log("================object property practice====================")
let vehical={

    model:"Active",
    colour:"red",
    speed:3000
}
console.log(vehical)
//fetch content
console.log(vehical.model)
console.log(vehical['colour'])
//add content
vehical.activity="run"
vehical.avg=30
console.log(vehical)
//rename content
vehical.model="herohonda"
vehical.avg=90
console.log(vehical)
//delete content
delete vehical.avg
console.log(vehical)

//Array 
console.log("=================Array======================")
let student=["chinmay","rahul","mayuri"]
console.log(student[0])
let rev1=''
for(let i=0;i<student.length;i++){
  rev1=rev1+" "+student[i]
}
console.log(rev1)
let rev2=""
for (let i=student.length-1;i>=0;i--){
    rev2=rev2+" "+student[i]
}
console.log(rev2)

console.log("============ array practice =================")
let fruits=["Apple","Banana","Mango","Grapes","orange"]
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
console.log("==================")
for (let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i])
}

let ref0=""
for(let i=0;i<fruits.length;i++){
   ref0=fruits[i]+" "+ref0
}
console.log(ref0) */


/* console.log("============array method============")

let names=["chinmay"," poorve","chirag"]

//Push Method
let mm=names.push("ram","sita")
console.log(mm)

//Pop Method
let nn=names.pop()
console.log(nn)

//unshift method
let bb=names.unshift("mayu")
console.log(bb)

//shift method
let vv=names.shift()
console.log(vv)

//indexof
let fruits=["mango","apple","banana","grapes"]
let cc=fruits.indexOf("mango")
console.log(cc)

let UN="apple"
if(fruits.indexOf(UN)<0){
    console.log("Fruit available")
}
else{
    console.log("Fruit not avilable")
}

//reverse method
let ll=["mango","apple","banana","grapes"]
let kk=ll.reverse()
console.log(kk)


//push method=> add element at end and return length of new array
//pop method=> remove last element of array and return same element which is remove
//unshift method=>add new element at begining and return length of array
//shift method=> remove start element from array and return element which remove
//indexOf method=> given index of element which enter 
//reverse method=> reverse the array method and return array only


//sort method
let num=[2,4,6,8,4,0,7,1,3,4]
let jj=num.sort()
console.log(jj)

//flat method
let hh=[[1,2,3],[4,5,6],[7,8,9]]
let gg=hh.flat()
console.log(gg)

//includes

let flowers=["jasmin","lly","chameli","mogra"]
let ff=flowers.includes("mogra")
console.log(ff)

//join
let flowers1=["jasmin","lly","chameli","mogra"]
let oo=flowers1.join("-")
console.log(oo) */

console.log("==================array method practice===============")

/* //push method
let student=["mayu","ranu","dinga","pinga"]
let zx=student.push("chinga")
console.log(zx)
console.log(student)

//pop method
let xc=student.pop()
console.log(xc)
console.log(student)

//unshift method
let cv=student.unshift("manga")
console.log(cv)
console.log(student)

//shift method
let vb=student.shift()
console.log(vb)

//indexOf
let bn=student.indexOf("ranu")
console.log(bn)

//reverse
let num1=[11,99,88,55,44,88,66,33,33]
let bv=num1.reverse()
console.log(bv)

//sort method
let vc=num1.sort()
console.log(vc)

//include method
let cx=num1.includes(12)
console.log(cx)

//flat method
let num2=[[1,2,3],[4,5,6],["mayu","tayu","sayu"],["a","b","c"]]
let xz1=num2.flat()
console.log(xz1)

//join method
let lmk=student.join("==")
console.log(lmk)

console.log("================================")

//map method
let birthyear=[1990,1998,1997,1992]
let xx=birthyear.map(function(el,index,arr){
    return 2021-el
})
console.log(xx)

//filter method
let age=[11,10,7,22,77,99,44,55,66]
let fil=age.filter(function(el,index,arr){
    return el>10
})
console.log(fil)

//reduce method
let xx1=age.reduce(function(acc,el,index,arr){
return el+acc
},0)
console.log(xx1/age.length)

//for each method
let student0=["chinmay","poorva","amol","abhisha"]
student0.forEach(function(el,index,arr){
    console.log(`Welcome ${el} !`)
})

//find method
let student3=[
    {firstname:"chinmay",age:30},
    {firstname:"poorva",age:24},
    {firstname:"abhisha",age:23}
]
/* let yy=student3.find(function(el,index,arr){
    return el.firstname="chinmay"
})
console.log(yy) 

//findindex method
let rr2=student3.findIndex(function(el,index,arr){
    return el.age==30
})
console.log(rr2)

//some method
let num12=[33,45,67,98,65,55]
let xyz=num12.some(function(el,index,arr){
    return el>40
})
console.log(xyz)

//Every method
let qwe=num12.every(function(el){
    return el>10
})
console.log(qwe)

//concat
let aa=[1,2,3]
let bb=[4,5,6]
let cc=bb.concat(aa)
console.log(cc)

//slice
let ss=[2,4,6,8,0]
let ref1=ss.slice(2,ss.length)
console.log(ref1)

//splice
let ref2=ss.splice(1,2,88,99)
console.log(ref2)
console.log(ss)

console.log("====================================")

//Map method
let year1=[1995,1990,189,1745]
let yy1=year1.map(function(el,index,arr){
    return 2021-el
})
console.log(yy1)

//filter method
let year3=[11,22,44,55,88,76,98,56]
let xxx1=year3.filter(function(el,index,arr){
    return el>22
})
console.log(xxx1)

//reduce method
let sum12=[23,65,78,98,56]
let mu=sum12.reduce(function(acc,el,index,arr){
    return acc+el
},0)
console.log(mu/sum12.length)

//find
let asdf1=[
{ firstname:"mayu",age:23},
{ firstname:"chinu",age:10},
{ firstname:"madhu",age:22}
]
let ggg1=asdf1.find(function(el,index,arr){
    return el.firstname=="mayu"
})
console.log(ggg1)

//findindex
let qwe1=asdf1.findIndex(function(el,index,arr){
    return el.firstname=="chinu"
})
console.log(qwe1)

//some method
let shr=[1,4,7,9,6,4,6,7,8]
let z123=shr.some(function(el,index,arr){
    return el>6
})
console.log(z123)

//every method
let x123=shr.every(function(el,index,arr){
    return el>6
})
console.log(x123)

//concat method
let aassdd=[1,2,3]
let ffddss=[0,9,8]
let ccvv= aassdd.concat(ffddss)
console.log(ccvv)

//slice method
let sli=[1,2,5,6,7,8,90,5,42,64,6564,]
let lmk1=sli.slice(4,9)
console.log(lmk1)

//splice method
let you1=sli.splice(2,4,52,311)
console.log(you1)
console.log(sli) */


console.log("===============revice method================")
//map
let age12=[1998,1992,1995,1994]
let reserve=age12.map(function(el,index,arr){
    return 2021-el
})
console.log(reserve)

//filter
let ref=[45,76,89,76,87,54,34,23]
let xy1=ref.filter(function(el,index,arr){
    return el>30
})
console.log(xy1)

//reduce 
let sum1=[67,78,89,65,43,32]
let cv1=sum1.reduce(function(acc,el,index,arr){
return acc+el
},0)
console.log(cv1)

//find method
let state=[
    { city:"sinnar" , population:2000},
    { city:"nsk" , population:3000},
    { city:"ahm" , population:5000},
]
let qwe1=state.find(function(el){
    return el.city=="nsk"
})
console.log(qwe1)

//findIndex
let xxy=state.findIndex(function(el){
    return el.city=="ahm"
})
console.log(xxy)

//some
let sum2=[67,78,89,65,43,32]
let yyu=sum2.some(function(el){
    return el > 70
})
console.log(yyu)

//every
let fun=sum2.every(function(el){
    return el >40
})
console.log(fun)

//concat
let xx=[2,3,4]
let yy=[3,4,5]
let cc=yy.concat(xx)
console.log(cc)

//slice method
let bk=[98,56,45,34,67,89,34,23]
console.log(bk.slice(2,8))

//splice
let bk1=bk.splice(2,3,05,02)
console.log(bk1)





