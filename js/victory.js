function printWinner(){
    let ganadorJuego = sessionStorage.getItem("turnoganador")


    if(ganadorJuego == "false"){
        document.getElementById("print-winner").innerHTML = `Felicidades ${sessionStorage.getItem("player1")}`
    } else{
        document.getElementById("print-winner").innerHTML = `Felicidades ${sessionStorage.getItem("player2")}`
    }
    
}
printWinner()