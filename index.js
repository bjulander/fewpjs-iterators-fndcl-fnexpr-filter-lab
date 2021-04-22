// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(array, name){
    return array.filter(i => i.toLowerCase() === name.toLowerCase())
}

// function fuzzyMatch(drivers, letter){
//     return drivers.filter(name => name.charAt(0) === letter)
// }

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0)
}

function matchName(drivers, matchName){
    return drivers.filter(i => i.name === matchName)
}


