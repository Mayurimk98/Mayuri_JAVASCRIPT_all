
let mayuri = {
    "fullName": "Mayuri",
    "lastName": 'Katwe',
    "rollNo": 20
}

//we can retrive,update,delete,create the property with thehelp of two notation dot notation bracket notation

//retriving proprty
// console.log(mayuri.fullName)
// console.log(mayuri['fullName'])

// update property
// mayuri.lastName="kashatriya"
// mayuri.age=40
// mayuri['lastName']="mali"
// mayuri['age']=50
// console.log(mayuri)

//create property
// mayuri.langauge="english"
// mayuri['langauge']="marathi"
// console.log(mayuri)

//method
let aa=mayuri.hasOwnProperty('rollNo')
console.log(aa)

// let a="asdfasdfasdfaaabcdd" //a={a:3,b:4,c:5}
// let b={}
// for(let i=0;i<a.length;i++){
//     if(b.hasOwnProperty(a[i])){
//         b[a[i]]=b[a[i]]+1
//     }
//     else{
//         b[a[i]]=1
//     }
// }
// console.log(b)

// for(let key in mayuri){
//     console.log(key,mayuri[key])
// }

for(let [key,value] of Object.entries(mayuri)){
    console.log(key,value)
}
