
class Person {
    constructor(fName, lName, age) {
        this.fName = fName
        this.lName = lName
        this.age = age
    }

    static obj(new1) {
        console.log(new1.length)

    }
}

// let mayu = new Person("mayu", "katwe", 23)
// let gayu = new Person("gayu", "rao", 12)
// let sayu = new Person("sayu", "kate", 24)

let student = []
let new1 = {}

let num = Number(prompt('Please enter the number of object need to create'))
if (num <= 3) {
    for (let i = 0; i < num; i++) {
        let fName = prompt('Please enter the firstname')
        let lName = prompt('Please enter the lastname')
        let age = prompt('Please enter the age')

        let obj = new Person(fName, lName, age)
        student.push(obj)
    }
}
else {
    console.log('Maximum limit of creating object is 3')
}

console.log(student)

Person.obj(student)




