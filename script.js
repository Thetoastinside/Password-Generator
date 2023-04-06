// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numericArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];


var possibleCharacters = []
var randomPassword = []
function generatePassword() {
  var pwlength = prompt('how long would you like your password to be?')
  if (pwlength < 8) {
    alert('Password must be at least 8 characters')
    return
  }
  if (pwlength > 128) {
    alert('Password must be under 128 characters')
    return
  }
  var numbers = confirm('would you like numbers in your pasword?')
  var special = confirm('would you like special characters?')
  var lower = confirm('would you like lower case letters?')
  var upper = confirm('would you like upper case letters?')

if (numbers === true) {
  possibleCharacters = possibleCharacters.concat(numericArray)
}
if (special === true) {
  possibleCharacters = possibleCharacters.concat(specialArray)
}
if (lower === true) {
  possibleCharacters = possibleCharacters.concat(lowerCaseArray)
}
if (upper === true) {
  possibleCharacters = possibleCharacters.concat(upperCaseArray)
}

console.log(possibleCharacters)

for(var i = 0; i < pwlength; i++) {
  var getIndex = Math.floor(Math.random()*possibleCharacters.length)
  var indexValue = possibleCharacters[getIndex]
  randomPassword.push(indexValue)
  console.log(randomPassword)
}




  return randomPassword.join("")
}