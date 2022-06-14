console.log('test'); // print a string
console.log(1234); // print a number
console.log(true); // print a boolean
console.log(['test', 'test2']); // print an array
console.log({a: 'test1', b: 'test2'}); // print an object


a = 10;
var b = 20;
let c = 30;

const d = 40;
const e = 'nekakov string';
const f = false;
// d = 50;

// string, boolean and number are base data types

const student = { // object
    ime: 'Pero',
    prezime: 'Perovski'
};

// console.log(a);
student.ime = 'Janko';

console.log(student);

// student = {
//     ime: 'Stanko',
//     prezime: 'Stankovski'
// };

console.log(student);

// BASE TYPE MEMORY USAGE

// let a     | let b     | let c     |
// ----------------------------------
// 10        | 'Pero'    | true      |

// base types -> number, string, boolean
// complex types -> arrays, objects

// COMPLEX TYPES MEMORY USAGE

// let d = {ime: 'Pero', znak: 'Vaga'}
// d.ime = 'Janko' // is OK
// d = {ime: 'Stanko'} // throws error!!!

// const d                | const e                |
// -------------------------------------------------
// &d1234god              |

const testFn = (o = {}) => {
        o.ime = 'Stanko';
        console.log(o);
    };

const s = {ime: 'Pero', prezime: 'Perovski'};

testFn(s);

// console.log(o);

//console.log(s);

let ucenik = {ime: 'Janko', ocenka: 10};
let stu = ucenik;

//console.log(ucenik);
//concsole.log(stu);

stu.ocenka = 7;

console.log(ucenik);

const tempConvert = (type, value) => {
    switch (type) {
        case 'c2f': 
        return value * 9/5 + 32;
        case 'f2c':
            return (value - 32) * 5/9;
            default:
                console.log('Cannot convert!');
                break;
    }
};

let temp = 100;
let rest = tempConvert('f2c', temp);
console.log('Convert result:', rest);
// function convertDegrees (c) {
//     return (c * 9/5 + 32);
// }

// console.log(convertDegrees(20))



// H O M E W O R K

//First exercise (from killometars to miles)

const lengthValueConvert = (type, value) => {
    switch (type) {
        case 'km2ml':
        return value / 1.609;
        case 'ml2km':
            return value * 1.609;
        default:
            console.log('Cannot convert!');
            break;
    }
};

// let convert = 100;
// let res = lengthValueConvert('km2ml', convert);
// console.log('Convert result:', res)

let convert = 200;
let res = lengthValueConvert('ml2km', convert);
console.log('Convert result:', res)

//Second exercise (from liters to gallons and vice versa)

let value = 300;
const lit2gall = value / 3.785;
const gall2lit = value * 3.785;

const volumeConvert = () => {
    console.log('Convert result from liters to gallons:', lit2gall)
    console.log('Convert result from gallons to liters:', gall2lit)
}

volumeConvert()

//third exercise (from pounds to euros)

let val = 250;
let poundsToEuros = val * 1.116;
let eurosToPounds = val * 0.86;

if (poundsToEuros) {
    // console.log('Convert result from pounds to euros:', poundsToEuros)
    poundsToEuros
} else {
    // console.log('Convert result from euros to pounds:', eurosToPounds)
    eurosToPounds
}

console.log(eurosToPounds)

//forth exercise (From inch to centimeter)

let number = 50
const inchToCm = number * 2.54
const CmToInch = number / 2.54

if (inchToCm) {console.log(inchToCm)} else
{console.log(CmToInch)}

// console.log(CmToInch)


//fifth exercise (year to days)







