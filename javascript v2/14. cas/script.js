/**
 * 1. Napraviti event listener za klik unutar canvasa
 * 2. Pratiti da li je prvi klik ili drugi klik, na treci klik resetujemo
 * 3. Uzeti poziciju na ekranu na kliku
 * 4. Nacrtati liniju
 */

let clickPoints = []; // [X, Y] , [X, Y]

let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext('2d');
let lineCounter = document.getElementById("lineCounter");

let drawButton = document.getElementById("draw");
let resetButton = document.getElementById("resetDrawing");
let drawWithColorButton = document.getElementById("drawWithColor");

let drawCounter = 0;


canvasElement.addEventListener('click', function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoints.push({x: x, y:y});

});


drawButton.addEventListener('click', function() {

    let randomColor = generateRandomColor();
    drawPath(randomColor);
    incrementDrawCounter();
    resetClickPoints();
    sendDrawMessage(randomColor);
});

drawWithColorButton.addEventListener("click", function() {
    let color = prompt("Unesite boju koju zelite?");

    drawPath(color);
    incrementDrawCounter();
    resetClickPoints();
    sendDrawMessage(color);
});

resetButton.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
});

function incrementDrawCounter() {
    drawCounter++;
}

function resetClickPoints() {
    clickPoints = [];
}

function generateRandomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function sendDrawMessage(color) {
    lineCounter.innerHTML += "Nacrtana "+drawCounter+" linija "+color;
}

function drawPath(color) {
    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

    for(let i in clickPoints) {
        if(i == 0) {
            continue;
        }
        ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }


    ctx.strokeStyle = color; // #FF231F
    ctx.stroke();
}