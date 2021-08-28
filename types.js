// function Animal(name) {
//     this.name = name
// }

// Animal.prototype.intro = function() {
//   console.log(`i'm ${this.name}`)
// }

// //let dog = new Animal('puppy')
// //Object.getPrototypeOf(dog)

// function Dog(name) {
//     Animal.call(this, name)
//     this.petDog = true
// }

// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.bark = function() {
//     console.log("bark bark")
// }

// let rocky = new Dog('rocky')

// console.log(rocky)
// console.log(rocky.intro())
// console.log(rocky.bark())

function test () {
  console.log('')
}

console.log("typeof function test() {}::", typeof function test() {})

console.log("typeof []::", typeof [])

console.log("Array.isArray([])::", Array.isArray([]))

console.log("typeof {}::", typeof {})

console.log("typeof null::", typeof null)

console.log("typeof 0::", typeof 0)

console.log("isNaN('abc')::", isNaN('abc'))

console.log("typeof true::", typeof true)

console.log("typeof \"bala\"::", typeof "bala")

console.log("typeof undefined::", typeof undefined)

console.log("typeof 5/0::", typeof 5/0)

console.log("typeof Symbol('foo')::", typeof Symbol('foo'))


//only for primitive
const isEmpty = (val) => {
    if(val || val === 0) {
        return false
    }
    return true
}

console.log("isEmpty('abac')::", isEmpty('abac'))
console.log("isEmpty(1)::", isEmpty(1))
console.log("isEmpty(0)::", isEmpty(0))
console.log("isEmpty('')::", isEmpty(''))
console.log("isEmpty(null)::", isEmpty(null))
console.log("isEmpty(undefined)::", isEmpty(undefined))
console.log("isEmpty(NaN)::", isEmpty(NaN))

