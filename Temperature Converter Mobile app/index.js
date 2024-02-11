function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const resultField = document.getElementById('result');

    let convertedTemperature;

    switch (fromUnit) {
        case 'celsius':
            convertedTemperature = celsiusToOther(temperatureInput);
            break;
        case 'fahrenheit':
            convertedTemperature = fahrenheitToOther(temperatureInput);
            break;
        case 'kelvin':
            convertedTemperature = kelvinToOther(temperatureInput);
            break;
        default:
            break;
    }

    resultField.value = convertedTemperature;
}

function celsiusToOther(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = parseFloat(celsius) + 273.15;
    return `Fahrenheit: ${fahrenheit.toFixed(2)}, Kelvin: ${kelvin.toFixed(2)}`;
}

function fahrenheitToOther(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    const kelvin = (parseFloat(fahrenheit) + 459.67) * 5 / 9;
    return `Celsius: ${celsius.toFixed(2)}, Kelvin: ${kelvin.toFixed(2)}`;
}

function kelvinToOther(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = (parseFloat(kelvin) * 9 / 5) - 459.67;
    return `Celsius: ${celsius.toFixed(2)}, Fahrenheit: ${fahrenheit.toFixed(2)}`;
}
