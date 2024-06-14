// Type Aliases
type stringOrNumber = string | number

type strungOrNumberArray = (string | number)[]

interface Guitarist {
    name: string,
    active: boolean,
    albums: strungOrNumberArray
}

type userId = stringOrNumber



let myName: 'Anish'

let userName: 'Dave' | 'John' | 'Amy'



const add = (a: number ,b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("hello")
logMsg(add(2,3))

let subtract = function (c: number, d: number): number {
    return c - d;
}

interface mathFunction {(a: number, b: number): number}

let multiply: mathFunction = function(c,d){
    return c * d;
}

// logMsg(multiply(2,6))


const sumAll = (a: number, b: number, c: number = 2): number => {
    
        return a + b + c;
}

// logMsg(sumAll(2,3, 10))

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,3))


// Functions =
// Type Aliases, Literal types, functions, function type, optional parameters, passing default value to a function, Rest parameters

