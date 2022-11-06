
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
let player1 = sessionStorage.getItem("player1");
let jugador2pieza = "O";
let player2 = sessionStorage.getItem("player2");
let cells = Array.from(document.getElementsByClassName("cell"))
let turnos = 12;
let gameOver = false;

cells.map((cell) => {
    cell.addEventListener("click", () => {

        if (turnos < 7) {
            if
                (cell.innerHTML == "X" && interruptor == true) {
                cell.innerHTML = "";
                turnos++;
            } else if (cell.innerHTML == "O" && interruptor == false) {
                cell.innerHTML = "";
                turnos++;
                console.log(turnos)
                console.log(interruptor)
            }
        }

        else {
            if (cell.innerHTML == "") {
                cell.innerHTML = (interruptor) ? jugador1pieza : jugador2pieza;
                interruptor = !interruptor
                turnos--;
                console.log(interruptor)

            }
        }
        printName()
        ganar ()

    })

});

const restartbutton = document.getElementById("restartbtn")
restartbutton.addEventListener("click", () => {
    restart ();
});

const restart = () => {
    cells.forEach(cell => {
        cell.innerHTML = "";
        turnos = 12;
        interruptor = true;
    });
}

const ganar = () => {
    for (i = 0; i < winConditions.length; i++) {
        let checks = winConditions[i];
        let cell1 = cells[checks[0]].innerHTML;
        let cell2 = cells[checks[1]].innerHTML;
        let cell3 = cells[checks[2]].innerHTML;

        if (cell1 == "" || cell2 == "" || cell3 == "") {

        }
        else if (cell1 == cell2 && cell2 == cell3) {
            console.log("WINNER");
            saveWinner();
            restart();
            window.location.href = "../pages/winner.html"
        };
    };
};

function printName(){

    if(interruptor){
        document.getElementById("turn-time").innerHTML = `It's turn of: ${sessionStorage.getItem("player1")}`
    } else{
        document.getElementById("turn-time").innerHTML = `It's turn of: ${sessionStorage.getItem("player2")}`
    }
    
}



function saveWinner(){
    sessionStorage.setItem("turnoganador", interruptor);
}
printName()

// const blockGame = () => {
//     let player1Name = sessionStorage.getItem("player1");
//     let player2Name = sessionStorage.getItem("player2");

//     if (player1Name == "" || player2Name == ""){
//         alert("Indicar los nombres es obligatorio")
    
//     }
// }

// blockGame();