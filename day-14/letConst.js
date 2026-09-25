var x = 10;
x = 20; // This will work because 'x' is declared with 'var', which allows reassignment.
var x = 30; // This will also work because 'var' allows redeclaration in the same scope.

let y = 10;
y = 20; // This will work because 'y' is declared with 'let', which allows reassignment.
// let y = 30; // This will throw an error because 'let' does not allow redeclaration in the same scope.

const z = 10;
// z = 20; // This will throw an error because 'z' is declared with 'const', which does not allow reassignment.
// const z = 30; // This will also throw an error because 'const' does not allow redeclaration in the same scope.