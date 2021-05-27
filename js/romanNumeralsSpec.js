var rn = require("./romanNumerals");

console.log(rn.lazyRoman(3) === 'III');
console.log(rn.lazyRoman(1) === 'I');
console.log(rn.lazyRoman(4) === 'IIII');
console.log(rn.lazyRoman(300) === 'CCC');
console.log(rn.lazyRoman(123) === 'CXXIII');
console.log(rn.lazyRoman(2400) === 'MMCCCC');
console.log(rn.lazyRoman(939) === 'DCCCCXXXVIIII');

// modern test cases
console.log(rn.newRoman(1) === 'I');
console.log(rn.newRoman(3) === 'III');
console.log(rn.newRoman(4) === 'IV');
console.log(rn.newRoman(300) === 'CCC');
console.log(rn.newRoman(123) === 'CXXIII');
console.log(rn.newRoman(2400) === 'MMCD');
console.log(rn.newRoman(939) === 'CMXXXIX');
console.log(rn.newRoman(594) === 'DXCIV');