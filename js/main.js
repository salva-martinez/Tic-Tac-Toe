// const iniciarELJuego = document.getElementById();
// const cells = document.querySelectorAll(".cell");
// Array.from(cells)
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.getElementById("restartBtn");
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
let cell = Array.from(document.getElementsByClassName("cell"))

    cell.map((casilla) => {
        casilla.addEventListener("click", ()=> {
            // click ha representado el evento, la funcion anonima indicara que intrucciones debe seguir la app
            if (casilla.innerHTML == "") {
                casilla.innerHTML = (interruptor) ? jugador1pieza : jugador2pieza
                interruptor = !interruptor
                // comprobamos en otra funcion si hay un ganador
            }
        })
    });