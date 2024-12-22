/**
 * 1. Napraviti event listener za klik unutar canvasa
 * 2. Pratiti da li je prvi klik ili drugi klik, na treci klik resetujemo
 * 3. Uzeti poziciju na ekranu na kliku
 * 4. Nacrtati liniju
 */

let clickPoints = []; // [X, Y] , [X, Y]

let canvasElement = document.getElementById("drawArea");
let ctx = canvasElement.getContext('2d');

let drawButton = document.getElementById("draw");
let resetButton = document.getElementById("resetDrawing");

canvasElement.addEventListener('click', function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    clickPoints.push({x: x, y:y});

});

drawButton.addEventListener('click', function() {

    ctx.beginPath();
    ctx.moveTo(clickPoints[0].x, clickPoints[0].y);

    /**
     * BeginPath i MoveTo
     *  -> Petlja koja radi lineTo: preskoci broj 0
     * Stroke isto ostaje
     */

    for(let i in clickPoints) {
        if(i == 0) {
            continue;
        }
        ctx.lineTo(clickPoints[i].x, clickPoints[i].y);
    }


    ctx.stroke();

    clickPoints = [];

});

resetButton.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
});