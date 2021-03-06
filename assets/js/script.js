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

// function to select password criteria

function generatePassword() {
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "f", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "[", "}", "]", ":", ";", "'", "<", ",", ">", ".", "/", "?", "|"];
    var selections = []; 

 getSelections();

 function getSelections() {

    
     getLowercase = confirm ("Do you want your password to include lowercase letters?");
     if (getLowercase) {
         selections = selections.concat(lowercaseLetters);
     }
 

    getUppercase = confirm ("Do you want your password to include uppercase letters?");
    if (getUppercase) {
        selections = selections.concat(uppercaseLetters);
    }


    getNumbers = confirm ("Do you want your password to include numbers?");
    if (getNumbers) {
        selections = selections.concat(numericCharacters);
    }

    getSpecialCharacters = confirm("Do you want your password to include special characters?");
    if (getSpecialCharacters) {
        selections = selections.concat(specialCharacters);
    }

    if (!getLowercase && !getUppercase && !getNumbers && !getSpecialCharacters) {
        window.alert("Password must contain at least one character type.");
        getSelections();
    }

    passwordLength = window.prompt ("Password Length: Please enter a character length between 8 and 128.");
    if (passwordLength >= 8 && passwordLength <= 128) {
        window.confirm("Your password is " + passwordLength + " characters long.");
        return;
        
    }

    if (passwordLength < 8) {
        window.alert("Password must be at least 8 characters.");
        getSelections();
    }
    else if (passwordLength > 128) {
        window.alert("Password cannot contain more than 128 characters.")
        getSelections();
    }
    else {
        window.alert("Please enter a character length between 8 and 128.")
        getSelections();
    }

   };


    // function to generate random password
    var printPassword = [];
    for (var i = 0; i < passwordLength; i++) {
        var generation = selections[Math.floor(Math.random() * selections.length)];
        printPassword = printPassword.concat(generation);
    }

    return (printPassword.join(""));


};