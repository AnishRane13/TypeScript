"use strict";
let myName;
let userName;
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
// logMsg(multiply(2,6))
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// logMsg(sumAll(2,3, 10))
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 3));
// Functions =
// Type Aliases, Literal types, functions, function type, optional parameters, passing default value to a function, Rest parameters
