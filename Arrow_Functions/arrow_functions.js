/* An arrow function is simply a special form of function expression that is shorter
    and therefore faster to write.
*/

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement; 
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Michael'));
console.log(yearsUntilRetirement(1980, 'Bob'));