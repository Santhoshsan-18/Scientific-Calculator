const display = document.getElementById("display");

// Append a character to the display
function appendCharacter(character) {
    display.value += character; // Add the clicked button's character to the display
}

// Clear the display
function clearDisplay() {
    display.value = ""; // Reset the display to an empty string
}

// Delete the last character
function deleteChar() {
    display.value = display.value.slice(0, -1); // Remove the last character from the display
}

// Calculate the result
function calculateResult() {
    try {
        // Replace `^` with JavaScript's exponent operator `**`
        let expression = display.value.replace(/\^/g, "**");
        
        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        alert("Invalid Expression!"); // Alert the user if the expression is invalid
        clearDisplay();
    }
}
