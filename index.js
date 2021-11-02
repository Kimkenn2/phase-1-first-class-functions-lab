function returnFirstTwoDrivers() {
    return [ 'Sally', 'Bob' ]
}
//
function returnLastTwoDrivers() {
    return [ 'Freddy', 'Claudia' ]
}
//
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//
function createFareMultiplier(x) {
    return function multiplier(y) {
       return x*y
    }
}
console.log(createFareMultiplier(5))

//

function fareDoubler(x) {
    return x*2

    }
//
    function fareTripler(x) {
        return x*3
    }
//
function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
}

//
function mult3(x) {
   return x*3
}
console.log(mult3(5))