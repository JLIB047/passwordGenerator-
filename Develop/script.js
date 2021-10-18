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
var charUpper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charUpperArr = charUpper.split("");
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charLowerArr = charLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!@#$%^&*()_-+=<>?~"
var symArr = sym.split("");


window.onload= alert("Welcome! please click 'Generate Password' to start!")

function generatePassword(){
  var charSelect = [];
  var resultPass = "";

var passwordLength = window.prompt("How long do you want your password to be? Please have it between 8-128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please have your password be between 8 and 128 characters")
    } 
      //confirm character conditions 

    else{
      if(confirm("Would you like your password to contain upper case letters?")){
        Array.prototype.push.apply(charSelect, charUpperArr);
      }
      if(confirm("Would you like your password to contain lower case letters?")){
        Array.prototype.push.apply(charSelect, charLowerArr);
      }
      if(confirm("Would you like your password to contain numbers?")){
        Array.prototype.push.apply(charSelect, numArr);
      }
      if(confirm("Would you like your password to contain symbols?")){
        Array.prototype.push.apply(charSelect, symArr);
      }
      if(charSelect.length===0){
        alert("You must select a minimum of one character type, please start over.");
      }
   
  //loop to confirm infor and generate password . 
      else{ 
        for(var i=0; i<passwordLength; i++){
          var random = Math.floor(Math.random() * charSelect.length);
          resultPass += charSelect[random];
        }
    }
    }
// display password

    document.getElementById("password").innerHTML = resultPass;
  
    
  }    
// Write password to the #password input
  function writePassword() {
    var password = generatePassword(); 

    var passwordText = document.querySelector("#password");

  }
  

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

