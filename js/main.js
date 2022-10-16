const statusDisplay = document.querySelector('.result')
const gameState = ['', '', '', '', '', '', '', '', ''];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let interruptor = true;
let jugador1pieza = "X";
let jugador2pieza = "O";
let cells = Array.from(document.getElementsByClassName("cell"))
let turnos = 12;
let gameOver = false;

cells.map((cell) => {
    cell.addEventListener("click", () => {

        if (turnos < 7) {
            console.log("turno de X")
            if
                (cell.innerHTML == "X" && interruptor == true) {
                cell.innerHTML = "";
                turnos++;
            } else if (cell.innerHTML == "O" && interruptor == false) {
                cell.innerHTML = "";
                turnos++;
            }
        }

        else {
            console.log("");
            if (cell.innerHTML == "") {
                cell.innerHTML = (interruptor) ? jugador1pieza : jugador2pieza;
                interruptor = !interruptor
                turnos--;

            }
        }

    })
});


//reste game
const restartbutton = document.getElementById("restartbtn")
restartbutton.addEventListener("click", () => {
    cellElements.forEach(cell => {
        cell.classList.remove("X", "O")
    });
    resultElement.innerHTML = ""
});
