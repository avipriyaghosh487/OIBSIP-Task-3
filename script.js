document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('tempInput').value;
    const fromUnit = document.querySelector('input[name="fromUnit"]:checked').value;
    const toUnit = document.querySelector('input[name="toUnit"]:checked').value;
    const output = document.getElementById('output');

    if (isNaN(tempInput) || tempInput === '') {
        output.textContent = 'Please enter a valid number.';
        return;
    }

    const tempValue = parseFloat(tempInput);
    let convertedTemp;

    if (fromUnit === toUnit) {
        convertedTemp = tempValue;
    } else {
        switch (fromUnit) {
            case 'C':
                if (toUnit === 'F') {
                    convertedTemp = (tempValue * 9/5) + 32;
                } else if (toUnit === 'K') {
                    convertedTemp = tempValue + 273.15;
                }
                break;
            case 'F':
                if (toUnit === 'C') {
                    convertedTemp = (tempValue - 32) * 5/9;
                } else if (toUnit === 'K') {
                    convertedTemp = (tempValue - 32) * 5/9 + 273.15;
                }
                break;
            case 'K':
                if (toUnit === 'C') {
                    convertedTemp = tempValue - 273.15;
                } else if (toUnit === 'F') {
                    convertedTemp = (tempValue - 273.15) * 9/5 + 32;
                }
                break;
        }
    }

    output.textContent = `${convertedTemp.toFixed(2)} °${toUnit}`;
});
