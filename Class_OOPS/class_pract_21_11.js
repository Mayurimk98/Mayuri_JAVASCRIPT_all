
//there are 3 method to create he class

//=========================================================
//1. by decaring object property outside of code
// class Person {
//     fullName = "Mayuri"
//     lastName = "Katwe"
//     age = 23
// }

// let amol = new Person()
// //amol={fullName="Mayuri",lastName="Katwe", age=23}

// amol.langauge = "Marathi"
// // amol.fullName
// amol.lastName = "kashatriya"
// // delete amol.age
// console.log(amol)

//In the above code problem is that same property get added to all object this can be overcome with the help of class creation by using constructor

//============================================================================================================

//2. by using class constructor
// class Person {
//     constructor(fullName, lastName, age) {
//         this.fullName = fullName
//         this.lastName = lastName
//         this.age = age
//     }
// }

// let mayuri = new Person("mayuri", "katwe", 23)
// console.log(mayuri)
// let ganesha = new Person("ganesh", "dev", 20)
// console.log(ganesha)

//=============================================================================================================

//3. by using function
// class Person {
//     setName(name) {
//         this.Name = name
//     }

//     setAge(age) {
//         this.Age = age
//     }

//     getName() {
//         return this.Name
//     }

//     getAge() {
//         return this.Age
//     }
// }

// let mayuri = new Person()
// mayuri.setName('Mayuri')
// mayuri.setAge('23')
// console.log(mayuri.getName())
// console.log(mayuri.getAge())
// console.log(mayuri)

//============================================================================================================

//bank program

// class bank {
//     constructor(Name, accountNo, DOB, bal) {
//         this.fullName = Name
//         this.accNo = accountNo
//         this.DOB = DOB
//         this.bal = bal
//         this.transcation = []
//     }

//     deposite(amount) {
//         this.bal = this.bal + amount
//         this.transcation.push(amount)
//         return this.bal
//     }

//     withdrow(amount) {
//         if (amount < this.bal) {
//             this.bal = this.bal - amount
//             this.transcation.push(-amount)
//             return this.bal
//         }
//         else {
//             console.log(`Insufficient Balance!! ${this.bal}`)
//         }
//     }

//     myNoOftranscation() {
//         console.log(this.transcation.slice(-5))
//     }
// }

// let mayuri = new bank("Mayuri", 108, "22/11/98", 10000)
// mayuri.deposite(3000)
// mayuri.withdrow(2000)
// mayuri.deposite(1000)
// mayuri.withdrow(200)
// mayuri.myNoOftranscation()

// let deposite = mayuri.transcation.filter((el)=>el>0).reduce((acc, el) => {
//         return acc + el

// }, 0)
// console.log(deposite)

// let withDrow = mayuri.transcation.filter((el)=>el<0).reduce((acc, el) => {
//         return acc + Math.abs(el)
// }, 0)
// console.log(withDrow)

//========================================================================================================

//multiple inheritance=>without super keyword

// class GrandFather{
//     constructor(lastName,cast,Money){
//         this.lastName=lastName
//         this.cast=cast
//         this.Money=Money
//     }
//     display(){
//         console.log(this.Money)
//     }
// }

// class father extends GrandFather{
//     setHouse(House){
//         this.House=House
//     }
//     displayHouse(){
//         console.log(this.House)
//         console.log(this.Money)
//     }
// }

// class son extends father{
//     setCar(car){
//         this.car=car
//     }
//     displayCar(){
//         console.log(this.car)
//         console.log(this.Money)
//         console.log(this.House)
//     }
// }

// let ankit=new son("Ankit",'jain','50000')
// ankit.setHouse('SweetHome')
// ankit.displayHouse()
// ankit.setCar('audi')
// ankit.displayCar()

//===================================================================================
//multiple inheritance with super

// class GrandFather {
//     constructor(lastName, cast, money) {
//         this.lastName = lastName
//         this.cast = cast
//         this.money = money
//     }
//     display() {
//         console.log(`I have ${this.money}  rs cash`)
//     }
// }


// class father extends GrandFather {
//     constructor(lastname, cast, money, home) {
//         super(lastname, cast, money)
//         this.home = home
//     }

//     display1() {
//         console.log(`I have ${this.money}  rs cash`)
//         console.log(`I am owner of  ${this.home} property`)
//     }
// }

// class son extends father {
//     constructor(lastname, cast, money, home, car) {
//         super(lastname, cast, money, home)
//         this.car = car
//     }
//     display2() {
//         console.log(`I have ${this.money}  rs cash`)
//         console.log(`I am owner of  ${this.home} property`)
//         console.log(`I am te owner of ${this.car} property`)

//     }
// }

// let mayu = new son('Katwe', 'Kashtriya', 50000, "SweetHome", "audi")
// mayu.display()
// console.log("**************")
// mayu.display1()
// console.log("**************")
// mayu.display2()

//=======================================================================================================

//We can create the object by using 3 way
//1. by using hard code

// let mayuri={
//     firstName:"mayuri",
//     age:20,
//     display(){
//         console.log("hello")
//     }
// }
// console.log(mayuri)

//------------------------------------------------

//2. by using class

// class human{
//     constructor(fullname,age){
//         this.fullname=fullname
//         this.age=age
//     }
//     display(){
//         console.log("Hello")

//     }
// }
// let mayuri=new human("myuri",23)
// console.log(mayuri)

//-----------------------------------------------

//3. bu usig function consructor

function human(fullName, age) {
    this.fullName = fullName
    this.age = age
}

let mayuri=new human('mayuri',23)
console.log(mayuri)




