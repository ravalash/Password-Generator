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

console.log(Math.random());


function generatePassword() {
  // Capture number of characters. Discard strings, round down integers
  var numPassword = 0;
  // Reinitialize password for future passes
  var chars = ""; 
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
  if (uPassword == true) {
    chars = chars + uChars;
  }
  if (lPassword == true) {
    chars = chars + lChars;
  }
  if (nPassword == true) {
    chars = chars + nChars;
  }
  if (sPassword == true) {
    chars = chars + sChars;
  }

  while((uPassword==true && uFound != true) || (lPassword==true && lFound != true) || (nPassword==true && nFound != true) || (sPassword==true && sFound != true)) {
     // Reinitialize built password
    var tempPassword = "";
    var uFound=false;
    var lFound=false;
    var nFound=false;
    var sFound=false;

    for (i=0;i<numPassword;i++) {
      tempPassword = tempPassword + chars[(Math.floor(Math.random()*chars.length))];
      console.log(tempPassword);
    }
    for (i=0;i<numPassword;i++) {
      for(n=0;n<uChars.length;n++) {
        if (tempPassword[i] == uChars[n]) {
        var uFound = 1;
        }
      }
      for(n=0;n<lChars.length;n++) {
        if (tempPassword[i] == lChars[n]) {
          var lFound = 1;
        }
      }
      for(n=0;n<nChars.length;n++) {
        if (tempPassword[i] == nChars[n]) {
          var nFound = 1;
        }
      }
      for(n=0;n<sChars.length;n++) {
        if (tempPassword[i] == sChars[n]) {
          var sFound = 1;
        }
      }
    }
  }

  return tempPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
