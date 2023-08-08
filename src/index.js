module.exports = function toReadable (num) {
  const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred"
  }
  let output = "";
  let strFromNum = num.toString();
 for(let i = 0; i < strFromNum.length; i++) {
    if(strFromNum.length === 3) {
      if(numbers[num]) {
        output += numbers[num]
        break
      } 
      if (strFromNum[0] === "0") {
        strFromNum = strFromNum.replace(strFromNum[0], "")
      } else {
        output += numbers[strFromNum[0]] + " hundred" + " ";
        strFromNum = strFromNum.replace(strFromNum[0], "")
      }
    }
    if(strFromNum.length === 2) {
      if(numbers[num]) {
        output += numbers[num]
        break
      } if (strFromNum[0] === "0") {
        strFromNum = strFromNum.replace(strFromNum[0], "")
        
      } if(numbers[strFromNum]) {
        output += numbers[strFromNum]
        break
      } else {
        if(strFromNum[0] !== "0") 
        output += numbers[strFromNum[0] + "0"] + " "
        strFromNum = strFromNum.replace(strFromNum[0], "")
      }
    }
    if(strFromNum.length === 1) {
      output += numbers[strFromNum[0]]
    }
      
 }
 if(output[output.length - 1] === " ") {
  output = output.slice(0, output.length-1)
  }
  return num ? output : "zero"
}
