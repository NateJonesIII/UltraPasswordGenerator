// Assignment Code Add functionality to the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//WritePassword function will ask user for complexity(length and which characters to add)
function generatePassword() {

  // Array List of element selections
  //Contains lower case characters (26 total)
  const LOWERLIST = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //Contains uppercase case characters (26 total)
  const UPPERLIST = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //Contains Decimals (10 total)
  const NUMBERLIST = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //Contains symbols (19 total)
  const SYMBOLLIST = ["_", "[", "]", "!", "^", "$", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "@"];
  //Temorary container for selected criteria (Size Max:81)
  var listContainer = [];

  //Length of password entered in by user prompts length bewteen 8-128 characters
  var passLength = prompt("Hello, Enter password length (8-128 digits)");
  if (+passLength < 8 || +passLength > 128) {
    passLength = +passLength;//Converting to a number shorthand
    alert("Password length must be between 8-128 Characters");
  }
  else {
    alert("Password Length: " + +passLength + " characters long");
    //Add list of charcters if user selects them(true) via confirm
    var lowerCase = confirm("Do you want lower case letters?");
    if (lowerCase) {
      listContainer = listContainer.concat(LOWERLIST);
    };
    var upperCase = confirm("Do you want Upper case letters?");
    if (upperCase) {
      listContainer = listContainer.concat(UPPERLIST);
    }
    var numbers = confirm("Do you want numbers?");
    if (numbers) {
      listContainer = listContainer.concat(NUMBERLIST)
    };
    var symbols = confirm("Do you want symbols?");
    if (symbols) {
      listContainer = listContainer.concat(SYMBOLLIST)
    }
    //if no information is selected program will start once again by calling the function
    else if (listContainer == null || listContainer == 0) {
      alert("No criteria Selected, Starting over process");
      generatePassword();
    }
    //Traverse listContainer adding each value to temporary password variable 
    var tempPass = " ";
    for (var i = 0; i < passLength; i++) {
      tempPass = tempPass + listContainer[Math.floor(Math.random() * listContainer.length)];
      //Remove // below to test which characters are added to tempPass
      //console.log(tempPass);
    }
    return tempPass;
  }

}
