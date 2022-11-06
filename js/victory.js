function printWinner(){
    let ganadorJuego = sessionStorage.getItem("turnoganador")


    if(ganadorJuego == "false"){
        document.getElementById("print-winner").innerHTML = `¡Congratulations ${sessionStorage.getItem("player1")}!`
    } else{
        document.getElementById("print-winner").innerHTML = `¡Congratulations ${sessionStorage.getItem("player2")}!`
    }
    
}
printWinner()

const startConfetti = () => {
    setTimeout(function(){
        Confetti.start();
    })
}

start();