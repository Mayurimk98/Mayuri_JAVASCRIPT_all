// let x
// let y=undefined
// console.log(undefined)
// console.log(typeof y)


// let z=null
// console.log(z)

// let y1=null
// console.log(typeof y1)


let nn=Symbol("#")
console.log(nn)
console.log(typeof(nn))



let obj={
    x:12,
    y:10,
    z: function(){
         this.y
    }
}
console.log(obj.z)