// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Variable Declaration
// initial character set
var chars = ""; 
// Upper case characters
var uChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Lower case characters
var lChars = "abcdefghijklmnopqrstuvwxyz";
// Numerical characters
var nChars = "0123456789";
// Symbol Characters
var sChars = "!@#$%^&*()_+-=";




function generatePassword() {
  // Capture number of characters. Discard strings, round down integers
  var nPassword = 0;
  while ((nPassword < 8 || nPassword > 128) || isNaN(parseInt(nPassword))) {
  var nPassword = prompt("Please enter a password length between 8 and 128 characters");
  nPassword=Math.floor(nPassword);
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
