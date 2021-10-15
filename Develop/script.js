// Assignment code here
//When you press the button 
  // series of Prompts 
    //length of Password 8-128 characters
      //write in an else for any other number 
    //character types, uppercase, lower case, numeric or special character 
    //each prompt is answered 
  //validate response 
    // use window alert ()
  //generate password 
    // randomize chosen character types into the password length chosen 
  //Display Password in an Alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecial = "!@#$%^&*()~_+<>?";
var charLowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";


//var passwordLength = Math.floor(Math.random() * 120) + 8;


function generatePassword () {
  var passwordLength = window.prompt("How long do you want your password to be? Please have it between 8-128 characters.");
  passwordLength = parseInt(passwordLength);
    
    if (passwordLength === "" || passwordLength === null) {
      window.alert("Please enter a valid response.");
      return generatePassword();
    };

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert ("Please enter a valid response.");
      return generatePassword();
    };

    if (passwordLength >= 8 || passwordLength <= 128) {
      console.log(passwordLength);
    };

  var charsSelectPrompt = window.prompt 
  ("What types of characters would you like in your password, Numeric, Lowercase, Uppercase, or special characters? Please enter 1 for Numeric, 2 for Lowercase, 3 for Uppercase and 4 for special characters.");
      
  
    







  }
// Write password to the #password input
  function writePassword() {
    var password = generatePassword(); 

    var passwordText = document.querySelector("#password");



   passwordText.value = password;
    
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

