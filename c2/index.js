function convertDegrees (c) {
    return (c * 9/5 + 32);
}

console.log(convertDegrees(20))

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







