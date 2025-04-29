function convert() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let calculation = `${celsius}°C × (9/5) + 32 = ${fahrenheit}°F`;

    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("calculation").value = calculation;
}

function resetForm() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").value = "";
}

function reverse() {
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan angka yang valid di Fahrenheit!");
        return;
    }

    let celsius = (fahrenheit - 32) * 5/9;
    let calculation = `(${fahrenheit}°F - 32) × (5/9) = ${celsius.toFixed(2)}°C`;

    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("calculation").value = calculation;
}
