// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  if(specialCharacters) {
    for(let i = 0; i < specialCharacters.length; i++);

  } else if(numericCharacters) {
    for(let i = 0; i < numericCharacters.length; i++);

  } else if(lowerCasedCharacters) {
    for(let i = 0; i < lowerCasedCharacters.length; i++);
  
  } else (upperCasedCharacters) =>
    {for(let i = 0; i < upperCasedCharacters.length; i++);

}
}

// Function for getting a random element from an array
function getRandom(arr) {
  for(i = 0; i < arr.length; i++) {
    let chars = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
    let randomNumber = Math.floor(Math.random() * chars.length);

    
  }
  return (password += chars.substring(randomNumber, randomNumber +1));
}



// Function to generate password with user input
function generatePassword() {
  let passwordCharacters = prompt("How many characters would you like your password to contain?");
  if ((passwordCharacters >= 10) && (passwordCharacters < 64)) {
    alert("Click OK to confirm including special characters.");
    alert("Click OK to confirm including numeric characters.");
    alert("Click Ok to to confirm lowercase characters");
    alert("Click OK to confirm including uppercase characters");
  }
  else {
    alert("Must have a password with minimum 10 characters and less then 64 characters");
  }

  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;

  };

  




}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
} 
writePassword();

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);