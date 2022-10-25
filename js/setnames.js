function setName() {
    //declarar variable que realiza la funcion de coger "elemento" por #id del html//
    //".value"= reconoce el valor de la #id del html//
    let name1 = document.getElementById("player1").value;
    let name2 = document.getElementById("player2").value;

    sessionStorage.setItem("player1", name1);
    sessionStorage.setItem("player2", name2);
};