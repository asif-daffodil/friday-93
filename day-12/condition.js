// if-else if-else statement
var num = 0;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Nasted if statement
var num1 = 10;
var num2 = 20;
if (num1 > 0) {
    if (num2 > 0) {
        console.log("Both numbers are positive.");
    } else {
        console.log("The first number is positive, but the second number is not.");
    }
} else {
    if (num2 > 0) {
        console.log("The first number is not positive, but the second number is.");
    } else {
        console.log("Both numbers are not positive.");
    }
}

// Switch statement
var day = new Date().getDay();
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 0:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// ternary operator
var age = 18;
var canVote = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(canVote);

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// nullsafe operator
var person =  undefined;
console.log(person ?? "Person not found."); 
