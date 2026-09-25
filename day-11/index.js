console.log("Hello World!");
// Singleline comment
/*
what you write
it's a comment
*/

var $_myName123 = "Asif Abir";
console.log($_myName123);

// data types
// premative data types
// String
console.log(typeof "Sky is blue");

// Number
console.log(typeof 123);

// Boolean
console.log(typeof true);

// Null
console.log(typeof null);

// Undefined
console.log(typeof stdName);

// Symbol
console.log(typeof Symbol("Hannan"));

// non-premative data type
// array
var myStudents = ["Hannan", "Nabila", "Kamruzzaman", "Hedayatul Islam"];
console.log(typeof myStudents);

// Function
function showData () {
    console.log("This is a data from inside a function");
}
console.log(typeof showData);

// Object
var myObj = {
    myName : "Asif",
    myGender : "Male",
    isMarried : true
}

console.log(typeof myObj);

// Operators
/**
 * Arithemetic Operators
 * + Addition
 * - Subtraction
 * * Multiplication
 * / Division
 * % Modulus
 * ** Exponentiation
 */

/**
 * Assignment Operators
 * = Assignment
 * += Addition Assignment
 * -= Subtraction Assignment
 * *= Multiplication Assignment
 * /= Division Assignment
 * %= Modulus Assignment
 * **= Exponentiation Assignment
 */

/**
 * Comparison Operators
 * == Equal to
 * === Equal value and equal type
 * != Not equal
 * !== Not equal value or not equal type
 * > Greater than
 * < Less than
 * >= Greater than or equal to
 * <= Less than or equal to
 */

/**
 * Logical Operators
 * && Logical AND
 * || Logical OR
 * ! Logical NOT
 */

/**
 * Increment and Decrement Operators
 * ++ Increment
 * -- Decrement
 */

/**
 * Ternary Operator
 * Nullish Operator
 * Optional Chaining Operator
 */

// Ternary Operator
var age = 21;
var res = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote";
console.log(res);

// Nullish Operator
var myAge = null;
console.log(myAge ?? "Age not found");

// Optional Chaining Operator
var myObj = {
    myName : "Asif",
    myGender : "Male",
    isMarried : true,
    myAddress : {
        myCity : "Dhaka",
        myCountry : "Bangladesh"
    }
}

console.log(myObj?.myAddress?.myCity);
console.log(myObj?.myThikana?.myVillage);
// console.log(myObj.myThikana.myVillage);

