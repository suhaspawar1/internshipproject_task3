document.getElementById("convertBtn").addEventListener("click", function() {
    const tempInput = document.getElementById("temperatureInput").value;
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById("result");

 
    if (isNaN(tempInput) || tempInput === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;

    switch (selectedUnit) {
        case "Celsius":
            convertedTemp = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case "Fahrenheit":
            convertedTemp = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C, Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}K`;
            break;
        case "Kelvin":
            convertedTemp = `Celsius: ${(temperature - 273.15).toFixed(2)}°C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
        default:
            resultDiv.textContent = "Please select a valid unit.";
            return;
    }

    resultDiv.textContent = convertedTemp;
});
