function VERF() {
    var IDADE = document.getElementById("AGE").value;
    if (IDADE < 0) {
    document.getElementById("RESULT").innerHTML = (`Você nem nasceu ainda`)
    } else if (IDADE > -1, IDADE <= 12) {
        document.getElementById("RESULT").innerHTML = (`Você é uma criança de ${IDADE} anos`)
    } else if (IDADE > 12, IDADE <= 17) {
        document.getElementById("RESULT").innerHTML = (`Você é um Adolecente de ${IDADE} anos`)
    } else if (IDADE > 17, IDADE <= 59) {
        document.getElementById("RESULT").innerHTML = (`Você é um Adulto de ${IDADE} anos`)
    } else if (IDADE > 59) {
        document.getElementById("RESULT").innerHTML = (`VocÊ é um Idoso de ${IDADE} anos`)
    }
};