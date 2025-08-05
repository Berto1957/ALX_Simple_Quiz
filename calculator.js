// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Cannot divide by 0';
    }
    return number1 / number2;
}

// Get references to DOM elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Event listeners
document.getElementById('add').addEventListener('click', function () {
    const result = add(getNumber1(), getNumber2());
    resultDisplay.textContent = result;
});

document.getElementById('subtract').addEventListener('click', function () {
    const result = subtract(getNumber1(), getNumber2());
    resultDisplay.textContent = result;
});

document.getElementById('multiply').addEventListener('click', function () {
    const result = multiply(getNumber1(), getNumber2());
    resultDisplay.textContent = result;
});

document.getElementById('divide').addEventListener('click', function () {
    const result = divide(getNumber1(), getNumber2());
    resultDisplay.textContent = result;
});

// Helper functions to get input values safely
function getNumber1() {
    return parseFloat(number1Input.value) || 0;
}

function getNumber2() {
    return parseFloat(number2Input.value) || 0;
}
