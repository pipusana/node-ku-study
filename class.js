class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = null
    }

    setAge(number) {
        this.age = number
    } 

    getAge() {
        return this.age
    }

    getFullName() {
        return this.firstName + '  ' + this.lastName
    }
}

const person = new Person('Pipusana', 'Petgumpoom')
const fullname = person.getFullName()
// person.setAge(27)
const age = person.getAge()

console.log('fullname', fullname)
console.log('age', age)
