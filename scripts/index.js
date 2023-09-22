function convertirAF() {
    // Obtener el valor de grados Celsius desde el input
    const celsius = parseFloat(document.getElementById("celsiusInput").value);

    // Verificar si el valor ingresado es un número válido
    if (!isNaN(celsius)) {
        // Realizar la conversión a Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;
        
        // Mostrar el resultado en un elemento HTML
        document.getElementById("resultado").textContent = `${celsius} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit.`;
    } else {
        // Si no se ingresó un número válido, mostrar un mensaje de error
        document.getElementById("resultado").textContent = "Por favor, ingrese un valor válido.";
    }
}