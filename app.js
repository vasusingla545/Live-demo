const utils = require('./utilities');

document.getElementById('concatenate').addEventListener('click', () => {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const message = `Welcome ${firstname} ${lastname} to G@I College`;
    document.getElementById('concatenateResult').textContent = message;
});

document.getElementById('ConvertF2C').addEventListener('click', () => {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const result = utils.FahrenheitToCelsius(fahrenheit);
    document.getElementById('resultinCelsius').textContent =`${fahrenheit} Fahrenheit is equal to ${result.toFixed(2)} degree Celsius`;
});

document.getElementById('Findfactorial').addEventListener('click', () => {
    const number = parseInt(document.getElementById('factorialInput').value);
    const result = utils.factorial(number);
    document.getElementById('factorialResult').textContent = `Factorial of ${number} is ${result}`;
});

document.getElementById('FindGcd').addEventListener('click', () => {
    const a = parseInt(document.getElementById('gcdInput1').value);
    const b = parseInt(document.getElementById('gcdInput2').value);
    const result = utils.gcd(a, b);
    document.getElementById('GcdResult').textContent = `GCD of ${a} and ${b} is ${result}`;
});
