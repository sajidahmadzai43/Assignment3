// Sajid Ahmadzai script.js file
// Audio file
var clickSound = new Audio('click.mp3');

function validateForm() {
    // Play the sound
    clickSound.play();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;

    //First name and last name combination
    var fullName = firstName + " " + lastName;

    // Get the DOM elements for displaying warnings and secret message
    var warning = document.getElementById('warning');
    var secretMessage = document.getElementById('secretMessage');

    // Check if the full name has more than 20 characters
    if (fullName.length > 20) {
        warning.innerHTML = "Your full name must be less than 20 characters!";
        warning.style.display = "block";
        secretMessage.style.display = "none";
        return;
    }

    // Check if the zip code is valid and contains just 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        warning.innerHTML = "Your zip code must be exactly 5 digits!";
        warning.style.display = "block";
        secretMessage.style.display = "none";
        return;
    }

    // If the inputs are valid, display the secret message
    warning.style.display = "none";
    secretMessage.innerHTML = "Congratulations! You've unlocked the secret message!";
    secretMessage.style.display = "block";
}

// Optional: Function to check if a string is a palindrome
function isPalindrome(str) {
    var normalizedStr = str.toLowerCase().replace(/[\W_]/g, '');  // Remove non-alphanumeric characters and underscores
    var reversedStr = normalizedStr.split('').reverse().join('');  // Reverse the string
    return normalizedStr === reversedStr;
}
