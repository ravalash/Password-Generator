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
  var numPassword = 0;
  while ((numPassword < 8 || numPassword > 128) || isNaN(parseInt(numPassword))) {
    var numPassword = prompt("Please enter a password length between 8 and 128 characters");
    numPassword=Math.floor(numPassword);
  }
  while(uPassword != true && lPassword != true && nPassword != true && sPassword != true){
    var uPassword = confirm ("Would you like to include upper case characters?");
    var lPassword = confirm ("Would you like to include lower case characters?");
    var nPassword = confirm ("Would you like to include numerical characters?");
    var sPassword = confirm ("Would you like to include special characters?");
    if (uPassword != true && lPassword != true && nPassword != true && sPassword != true){
      alert("Your password must contain at least ONE character set selection");
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
