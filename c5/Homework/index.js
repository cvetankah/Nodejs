// array.concat() - спојува две или повеќе низи, со тоа што не ја менува постоечката. всушност враќа нова низа
const subjects = [
    "Maths", 
    "English", 
    "Chemistry",
    "PE",
    "Physics"
]

console.log(subjects)

const grades = [
    "5",
    "3",
    "5",
    "4",
    "5"
]

console.log(subjects.concat(grades))

//copyWithin() - копира дел од низа, тој дел го преместува на посакуваната позиција во истата таа низа и ја враќа низата без да и ја смени должината. Ако имаме негативен индекс, тогаш таргетот се брои од крајот и почнува од бројот -1. Ако таргетот е колку самата низа или подолг од неа, тогаш ништо нема да се ископира. 
// Syntax: copyWithin(target, start, end)

const movies = [
    "The Exam", 
    "Marry Me", 
    "The Intern", 
    "Bad Boys",
    "Godfather"
]

console.log(movies)

const TVShows = [
    "Friends",
    "The Big Band Theory", 
    "How I Met Your Mother",
    "The Blacklist", 
    "Breaking Bad"
]

console.log(movies.copyWithin(3, 1, 2))
console.log(TVShows)
console.log(TVShows.copyWithin(-2, 1))

//entries() - враќа нова низа која го содржи клуот/вредноста за секој индекс во низата

const keyValues = ["teachers", "doctors", "builders", "administrators", "programmers"]
const keyValuesEntries = keyValues.entries()

for (let element of keyValuesEntries) {
    console.log(element)
}

// every() - проверува дали сите елементи од низата го поминуваат тестот кој што е зададен со одредена функција. Како return враќа boolean

function ingredientsValue(element, index, array)

ingredientsValue = 


