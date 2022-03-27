// Assignment code here
//Characters used in password
var lowerc = "abcdefghijklmnopqrstuvwxyz";
var upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_-+=";
var password = "";

window.alert("For previously generated passwords check console (ctrl + shift i)")

//Generate password
function generatePassword(length, characters) {
  let password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("password");
var length = document.getElementById("length");
var incLowerc = document.getElementById("lowerc");
var incUpperc = document.getElementById("upperc");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  let characters = "";
  //Check what criteria the user prompted
  incLowerc.checked ? (characters += lowerc) : "";
  incUpperc.checked ? (characters += upperc) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";

  //Generate password with selected criteria
  passwordText.value = generatePassword(length.value, characters);

  //Save previous passwords to console
  console.log(passwordText.value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


