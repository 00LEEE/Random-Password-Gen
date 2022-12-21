var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  // Characters, #'s & Special characters.
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  let characterSet = '';
  let password = '';
  
  // Display password criteria.
  window.alert('The password can contain at least one of each of the following character types: lowercase letters, uppercase letters, numbers, and special characters.');
  
  // Prompts user for preferences.
  const includeLowercase = window.confirm('Include lowercase letters in the password?');
  const includeUppercase = window.confirm('Include uppercase letters in the password?');
  const includeNumbers = window.confirm('Include numbers in the password?');
  const includeSpecialCharacters = window.confirm('Include special characters in the password?');
  
  // Character set based user's preferences.
  if (includeLowercase) {
    characterSet += lowercase;
  }
  if (includeUppercase) {
    characterSet += uppercase;
  }
  if (includeNumbers) {
    characterSet += numbers;
  }
  if (includeSpecialCharacters) {
    characterSet += specialCharacters;
  }
  
  // Password generation.
  for (let i = 0; i < length; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  
  // Return generated password.
  return password;
}

function writePassword() {
  // Prompt user for password length.
  let passwordLength = window.prompt('Enter the desired password length (between 8 and 128 characters):');

  // Checking if password length is less than 8 or more than 128
  // or if the user cancels the prompt it will have you regenerate.
  if (passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    window.alert('Password must be between 8 & 128 characters long!');
    return;
  }

  // Converting "passwordLength" to a number.
  passwordLength = parseInt(passwordLength);

  // Generate password.
  const password = generatePassword(passwordLength);

  // Password will be displayed.
  const passwordField = document.querySelector("#password");

  passwordField.value = password;
}

// Listener for Generate click
generateBtn.addEventListener("click", writePassword);

