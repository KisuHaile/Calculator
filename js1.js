// Adds a digit to the display.
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Adds an operator to the display if the last character is not an operator.
function appendOperator(operator) {
    const display = document.getElementById('display');
    const value = display.value;
    if (value && !isNaN(value[value.length - 1])) {
        display.value += operator;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// valuates the expression in the display using eval(). Note that eval() is generally not recommended for use in production code due to security risks, but it's fine for a simple example like this.
function calculate() {
    const display = document.getElementById('display');
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}