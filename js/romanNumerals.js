let modernRomanArr = [
{"M": 1000},
{"CM": 900},
{"D": 500},
{"CD": 400},
{"C": 100},
{"XC": 90},
{"L": 50},
{"XL": 40},
{"X": 10},
{"IX": 9},
{"V": 5},
{"IV": 4},
{"I": 1}
]
let lazyRomanArr = [
  {"M": 1000},
  {"D": 500},
  {"C": 100},
  {"L": 50},
  {"X": 10},
  {"V": 5},
  {"I": 1}
  ]
exports.lazyRoman = function(num) {
// create output string 
  return convertLazyRoman(num,lazyRomanArr);

};
exports.newRoman = function(num) {
  return convertLazyRoman(num,modernRomanArr)
  
};
function convertLazyRoman(num, data) {
    // create output string 
  let output = '';
  let inputNum = num;
  
  //iterate through romanArr and if the inputnum is less than each romanArr
  //and divide by it and add each iterate letter to output string
  
  for (let obj of data) {
    for(let key in obj) {
      let arabicNum = obj[key];
      let romanNum = key;
      let divideInput = Math.floor(inputNum/ arabicNum);
      if(divideInput >= 1) {
        inputNum = inputNum % arabicNum;
        output += romanNum.repeat(divideInput);
      }
    }
  }
  
  //return output string
  return output;
  
  };
  
