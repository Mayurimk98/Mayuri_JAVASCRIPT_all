
// class human {
//     fullname = "Mayuri"
//     lastname = "Katwe"
//     display = () => {
//         return (this.fullname)

//     }

// }

// let amol = new human()
// console.log(amol.display())

// let amit = new human()

// let aa = { ...amol, ...amit }
// console.log(aa)

class person {
    constructor(fname, lname, age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }
}

let amrapali = new person("mayuri","katwe",23)
//console.log(amrapali)

let rahul=new person("rahul","shetti",78)
//console.log(rahul)


let student=[amrapali,rahul]

student.forEach((el)=>{
    // for(let [key,value] of Object.entries(el)){
    //     console.log(key,value)
    for(let key in el){
console.log(key,el[key])
    }
    })




// console.log(student)

// let a1=[1,2,3]
// let b=[4,5,6]
// let c=[...a1,...b]
// console.log(c)









