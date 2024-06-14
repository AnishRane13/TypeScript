let stringArr: string[] = ['one', 'two', 'three']

let guitars = ['start', 6556]

let mixedData = ['evh', 2772, true];

stringArr[0] = 'John'
stringArr.push("hsshs")

guitars[0] = 2727

// console.log(stringArr)

let test = []




// Tuple

let myTuple: [string, number, boolean] = ['Dave', 42, true];

let mixed = ['john', 1, false]



// Objects

let myObj: object

myObj = []

const Obj = {
    prop1: 'Dave',
    prop2: true
}


type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[]
}

let Obj1: Guitarist = {
    name: 'Anish',
    active: true,
    albums: [2,3,2,2,2]
}

// Array, Tuple, Objects,  Interface

// Interface

const greet = (guitarst: Guitarist) => {
    return `Hey ${guitarst.name}`
}

console.log(greet(Obj1))


