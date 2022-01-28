// program to check leap year

function isLeap(year) {

    //three conditions to find out the leap year
    if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
        return year + " is a leap year";
          }
    else {
        return year + " is not a leap year";
    }
}
