// Assignment code here
var lowerc = "abcdefghijklmnopqrstuvwxyz";
var upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_-+=";

window.alert("For previously generated passwords check console (ctrl + shift i)")

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

  incLowerc.checked ? (characters += lowerc) : "";
  incUpperc.checked ? (characters += upperc) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordText.value = generatePassword(length.value, characters);

console.log(passwordText.value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


