function printConcatenatedMessage(firstname, lastname) {
    console.log(`Welcome ${firstname} ${lastname} to G@I College`);
}

function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

module.exports = {
    printConcatenatedMessage,
    FahrenheitToCelsius,
    factorial,
    gcd
};
