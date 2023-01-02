const leapYears = function(year) {
    /*if(year % 400 == 0)return true; //My solution
    if(year % 100 == 0)return false;
    if(year % 4 == 0)return true;
    return false;*/
    return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0); //one-liner solution
};

// Do not edit below this line
module.exports = leapYears;
