// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers){
    let firstTwoDrivers = drivers.slice(0,2);

    return firstTwoDrivers; }

const returnLastTwoDrivers = function (drivers) {
    let lastTwoDrivers = drivers.slice(2,4);
    return lastTwoDrivers;
}

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (value){
    return function(fare) {
        return fare * value;
    }
}

const fareDoubler= createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, a) {
    return a(drivers)
    ;
}




// const ret = selectDifferentDrivers(drivers, firstTwoDrivers)