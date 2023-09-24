// Chapter 21 (Changing Case)

// question 01

var allLower = userInput.toLowerCase();


// question 02

x = x.toLowerCase();


// question 03

y = y.toUpperCase();



// question 04

var originalString = "String"; 
var lowerCaseString = originalString.toLowerCase();


// question 05

var myArray = ["folder"];
var newArrayElement = myArray[0].toLowerCase();


// question 06
var myString = "hello";
alert(myString.toUpperCase());


// question 07

var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 21 (Changing Case) completed


// Chapter 22 - 25 (Strings)


// question 01

var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);


// question 02

var myString = "hello"; 
var characterCount = myString.length;

// question 03

var animal = "elephant";
var seg = animal.slice(1, 5);

// question 04

var myString = "erterdg";
var characterCount = myString.length;

// question 05

var myString = "frtygb"; //
var characterCount = myString.length;
var slicedString = myString.slice(1, characterCount - 3);

// question 06

//  var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

//    3


// question 07

// 16


// question 08

var text = "Let's go for a walk and then go home and go to sleep.";
var lastIndex = text.lastIndexOf("go");
var indx = text.indexOf("go", lastIndex);

// question 09

if (typeof text[indexNum] !== 'undefined') {
  
} else {
 
}

// question 10

var str = "abcde";
var characterAtIndex2 = str.charAt(2);
console.log(characterAtIndex2); //


// question 11

var text = "text";
var cha = text.charAt(9);

// question 12

var str = "This is a sample string.";
var x = str.charAt(str.length - 1);

// question 13

var input = "page";
var cha = input.charAt(4);

// question 14
if (str.charAt(2) === 'desiredCharacter') {
  
} else {
 
}


// question 15

var reply = "world";


var charArray = [];


for (var i = 0; i < reply.length; i++) {
  charArray.push(reply.charAt(i));
}

var revisedReply = charArray.join('');


revisedReply = revisedReply.replace("no", "yes");

console.log(revisedReply);

// question 16

var str = "This is a string with 1 in it. Replace the first 1 with one.";
var newStr = str.replace("1", "one");

// question 17

var y = x.replace("a", "z");

// Chapter 22 - 25 (Strings) completed


// Chapter 26 (Rounding Numbers)


// question 01

var randomNumber = Math.floor(Math.random() * 50) + 1;

// question 02

var origNum = 7.3;
var roundNum = Math.ceil(origNum);

// question 03
var origNum = 9.8;
var roundNum = Math.floor(origNum);

// question 04

var numberToRound = 3.6;
var roundedResult = Math.round(numberToRound);

// question 05

var roundedValue = Math.round(0.5);

// Chapter 26 (Rounding Numbers) completed

// Chapter 27 (Random Numbers)

// question 01

var randomNum = Math.floor(Math.random() * 50) + 1;

// question 02

var randomVariable = Math.random();

// question 03


var diceRoll = Math.floor(Math.random() * 6) + 1;


console.log("The dice rolled:", diceRoll);

// question 04

var randomValue = Math.random();
var tossResult = randomValue < 0.5 ? "Heads" : "Tails";
console.log("The coin toss result is:", tossResult);


// Chapter 27 (Random Numbers) completed

// Chapter 28, 29 (Converting Strings)

// question 01

var str = "42"; 
var intValue = +str;
console.log(intValue); 

// question 02

function stringToInt(str) {
  return parseInt(str, 10);
}
var str = "123";
var intValue = stringToInt(str);
console.log(intValue); 

// question 03

var str = "3.14159"; 
var floatValue = parseFloat(str);
console.log(floatValue); 

// question 04

function isStringConvertibleToInt(str) {
  return !isNaN(parseInt(str, 10));
}
var strInt = "123";
var strNonInt = "abc";
console.log(isStringConvertibleToInt(strInt));     
console.log(isStringConvertibleToInt(strNonInt));  

// question 05

function isStringConvertibleToFloat(str) {
  return !isNaN(parseFloat(str));
}
var strFloat = "3.14159";
var strNonFloat = "abc";
console.log(isStringConvertibleToFloat(strFloat));  
  
console.log(isStringConvertibleToFloat(strNonFloat));  

// question 06

function numberToString() {
  var number = 42;
  var stringNumber = number.toString();
  return stringNumber;
}
var result = numberToString(); 
console.log(result); 

// question 07

var decimalString = "3.14";
var integerValue = parseInt(decimalString, 10);

console.log(integerValue); 

// Chapter 28, 29 (Converting Strings) cpmpleted

// Chapter 30 (Controlling the length of decimals)

// question 01

var num = 7.1417755359; 
var newNum = num.toFixed(4).toString();


// question 02

var num = 9.141542455359; 
num = Number(num.toFixed(2));

// question 03

if (num.toFixed(2).toString().length > 4) {

} else {
 
}

// question 04

var originalNumber = 6.145632865359; 
var roundedString = originalNumber.toFixed(2);
alert(roundedString);

// Chapter 30 (Controlling the length of

//   decimals) completed




 







