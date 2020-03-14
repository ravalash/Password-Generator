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
  // Initialize number of characters choice outside of while loop conditions
  var numPassword = 0;
  // Initialize character set
  var chars = ""; 
  // Capture number of characters. Discard strings, round down integers
  while ((numPassword < 8 || numPassword > 128) || isNaN(parseInt(numPassword))) {
    var numPassword = prompt("Please enter a password length between 8 and 128 characters");
    // Captures whether initial prompt was cancelled to exit loop. Returns "cancelled" message.
    if (numPassword == null){
      return "cancelled";
    }
    numPassword=Math.floor(numPassword);
  }
  // Capture conditional choices. Reject option and redo if no valid choice is selected.
  while(uPassword != true && lPassword != true && nPassword != true && sPassword != true){
    var uPassword = confirm ("Would you like to include upper case characters?");
    var lPassword = confirm ("Would you like to include lower case characters?");
    var nPassword = confirm ("Would you like to include numerical characters?");
    var sPassword = confirm ("Would you like to include special characters?");
    if (uPassword != true && lPassword != true && nPassword != true && sPassword != true){
      alert("Your password must contain at least ONE character set selection");
    }
  }
  // Builds character set based on previous choices
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

  // While loop checks built password to verify it includes one of each previously selected character. Runs loop again on failure.
  while((uPassword==true && uFound != true) || (lPassword==true && lFound != true) || (nPassword==true && nFound != true) || (sPassword==true && sFound != true)) {
    // Reinitialize built password
    var tempPassword = "";
    // Initialize found condition for each conditional type
    var uFound=false;
    var lFound=false;
    var nFound=false;
    var sFound=false;
    // For loop runs through once per length of password and chooses a random character from array. Adds character to built password.
    for (i=0;i<numPassword;i++) {
      tempPassword = tempPassword + chars[(Math.floor(Math.random()*chars.length))];
      console.log(tempPassword);
    }
    // Loops once through each character in built password. Checks whether each character is found in separate character sets.
    for (i=0;i<numPassword;i++) {
      // Loops once through each character in character array
      for(n=0;n<uChars.length;n++) {
        if (tempPassword[i] == uChars[n]) {
        var uFound = true;
        }
      }
      for(n=0;n<lChars.length;n++) {
        if (tempPassword[i] == lChars[n]) {
          var lFound = true;
        }
      }
      for(n=0;n<nChars.length;n++) {
        if (tempPassword[i] == nChars[n]) {
          var nFound = true;
        }
      }
      for(n=0;n<sChars.length;n++) {
        if (tempPassword[i] == sChars[n]) {
          var sFound = true;
        }
      }
    }
  }
  // Returns value of built password as result.
  return tempPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
