// Axel Cotón Gutiérrez Copyright 2023


let currentColor = '';
let lastColor = '';

function randomColor() {
    const colors = ['green', 'orange', 'purple'];
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastColor); // Repetir hasta obtener un color diferente al último

    lastColor = newColor; // Actualizar el último color
    return newColor;
}

function setColor() {
    currentColor = randomColor();
    const colorCircle = document.getElementById('color-circle');
    colorCircle.style.backgroundColor = currentColor;
}

function checkColor(color) {
    const result = document.getElementById('result');
    if ((color === 'Verde' && currentColor === 'green') || 
        (color === 'Naranja' && currentColor === 'orange') ||
        (color === 'Violeta' && currentColor === 'purple')) {
        result.innerHTML = '¡Correcto! Buen trabajo.';
        result.style.color = "green";
    } else {
        result.innerHTML = 'Incorrecto. Vuelve a intentarlo.';
        result.style.color = "red";
    }
}

function nextQuestion() {
    setColor();
    document.getElementById('result').innerHTML = '';
}

window.onload = setColor;

