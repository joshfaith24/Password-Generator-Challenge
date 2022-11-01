// Assignment Code
var generateBtn = document.querySelector("#generate");

var passRequire = {

  //password length
  passLength: 0,

  //holds lowercase
  passLower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  //holds uppercase
  passUpper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //holds numbers
  passNum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  //holds special
  passSpec: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generates new password
function generatePassword() {

  //result of generated password 
  var result = "";

  //variables of prompts
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialCharacter;

  //init
  passwordLength = 0;
  passRequire.passLength = 0;
  result = "";

  //password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Choose # of Characters from 8-128");

    //if user presses cancel
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      //checking user enters an integer
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        //check password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Betweem 8-128 characters");
          return "Your secure password";
        }
        else {

        showPrompts();

          //add characters until passLength is at user set
        while (passRequire.passLength < passwordLength) {
            //if statement to make sure the user selects at least one of the criteria  
          if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("Must Use 1 Requirement")
              showPrompts();
            }
          else {
              if (lowerCase === true && passRequire.passLength < passwordLength) {
                var lc = passRequire.passLower[Math.floor(Math.random() * 26)]
                result = result + lc;
                passRequire.pwdLength++;
              }

              if (specialChar === true && passRequire.passLength < passwordLength) {
                var sc = passRequire.passSpec[Math.floor(Math.random() * 32)]
                result = result + sc;
                passRequire.passLength++;
              }

              if (upperCase === true && passRequire.passLength< passwordLength) {
                var uc = passRequire.passUpper[Math.floor(Math.random() * 26)]
                result = result + uc;
                passRequire.passLength++;
              }

              if (numbers === true && passRequire.passLength < passwordLength) {
                var num = passRequire.passNum[Math.floor(Math.random() * 10)]
                result = result + num;
                passRequire.passLength++;
              }
            }
          }
        }
      }
    }

    return result;

    //internal function to prompt the user for criteria
    function showPrompts() {
      lowerCase = confirm("Lowercase? Cancel for No");
      upperCase = confirm("UpperCase? Cancel for No");
      numbers = confirm("Numbers? Cancel for No");
      specialChar = confirm("Special Characters? Cancel for No");
    }
  }
}