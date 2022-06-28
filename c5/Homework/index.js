// array.concat()
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

//copyWithin()

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

console.log(movies.copyWithin(3, 1))
console.log(TVShows)
console.log(TVShows.copyWithin(1, 3))