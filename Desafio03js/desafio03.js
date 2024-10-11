function AVALIAR() {
    var NAME = document.getElementById("nome").value;
    var AGE = document.getElementById("idade").value;
    var CITY = document.getElementById("cidade").value;
    document.getElementById("RESULT").innerHTML = (`Prazer ${NAME}, verifiquei aqui que você tem ${AGE} Anos, e que você é de ${CITY}`)
};