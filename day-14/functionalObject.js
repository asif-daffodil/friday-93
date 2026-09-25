// Function as Object
const myFunc = () => {
    return "Hello, World!";
} 
myFunc.myName = "Asif Abir";
myFunc.addres = () => {
    return "Dhaka, Bangladesh";
}

console.log(myFunc());
console.log(myFunc.myName);
console.log(myFunc.addres());

// Constructor Function
const person = function (name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new person("Asif Abir", 25);
console.log(person1.greet());

const person2 = new person("Himel", 26);
console.log(person2.greet());

// Factory Function
const createPerson = (name, age) => {
    return {
        name,
        age,
        greet: function () {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }
}
const person3 = createPerson("John", 30);
console.log(person3.greet());

const person4 = createPerson("Jane", 28);
console.log(person4.greet());

// Creating Object using Object.create()
const personProto = {
    greet: function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const person5 = Object.create(personProto);
person5.name = "Bob";
person5.age = 35;
console.log(person5.greet());