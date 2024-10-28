// Expression
1 + 1;

// Statement
let myAdd = 1 + 1;
console.log(myAdd);

// Assignment Operators
console.log("=== Assignment Operators ===");
let num;
num = 10;
num += 1;
num *= 1;
num -= 1;
num /= 1;
num %= 1;
num **= 1;
console.log("= += -= *= /= %/ **= ")

// Arithmetic Operators
console.log("=== Arithmetic Operators ===");
let x = 2;
let y = 4;
console.log("x =",x);
console.log("y =",y);

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division", x / y);
console.log("Modulus", x % y);
console.log("Exponentiation:", x ** y);
console.log("Increment:", x++);
console.log("Decrement:", x--);

// procedure => () * / + -
console.log("100+50*2 =", 100+50*2);
console.log("(100+50)*2 =", (100+50)*2);

// Comparison Operators
console.log("=== Comparison Operators ===");
let a = 1;
let b = 2;
console.log("a =",a);
console.log("b =",b);

console.log("a == b : ",a == b);
console.log("a === b : ",a === b); // value and data type
console.log("a != b : ",a != b);
console.log("a !== b : ",a !== b); // value and data type
console.log("a > b : ",a > b);
console.log("a < b : ",a < b);
console.log("a >= b : ",a >= b);
console.log("a <= b : ",a <= b);
// ternary operator => ?

// Logical Operators
console.log("=== Logical Operators ===");
let t = true;
let f = false;
console.log("t && t :", t && t, "t && f :", t && f);
console.log("t || f :", t || f, "f || f :", f || f);
console.log("!t :", !t, "!f :", !f);